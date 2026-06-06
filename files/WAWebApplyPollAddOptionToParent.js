__d(
  "WAWebApplyPollAddOptionToParent",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebCastToPollCreationMsg",
    "WAWebDBMessageSerialization",
    "WAWebModelStorageUtils",
    "WAWebMsgType",
    "WAWebPollsGatingUtils",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    async function c(t) {
      if (t.length !== 0) {
        var n = d(t),
          a = Array.from(n.keys()),
          i = [];
        (await o("WAWebModelStorageUtils")
          .getStorage()
          .lock(["message"], async function (t) {
            var l = t[0],
              u = await l.bulkGet(a),
              c = [];
            (a.forEach(function (t, a) {
              var l = u[a],
                d = n.get(t);
              if (l == null || d == null) {
                l == null &&
                  o("WALogger")
                    .ERROR(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[applyPollAddOptionsToParent] parent msg not found ",
                          "",
                        ])),
                      t,
                    )
                    .sendLogs("poll_add_option_parent_not_found");
                return;
              }
              var p = o("WAWebDBMessageSerialization").messageFromDbRow(l);
              if (p.type !== o("WAWebMsgType").MSG_TYPE.POLL_CREATION) {
                o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[applyPollAddOptionsToParent] parent not poll creation msg",
                      ])),
                  )
                  .sendLogs("poll_add_option_parent_not_poll");
                return;
              }
              var _ = r("WAWebCastToPollCreationMsg")(p),
                f = m(_, d);
              f != null &&
                (c.push(f), i.push({ msg: f, chatId: _.id.remote.toString() }));
            }),
              c.length > 0 &&
                (await l.bulkCreateOrMerge(
                  c.map(function (e) {
                    return o("WAWebDBMessageSerialization").dbRowFromMessage(e);
                  }),
                )));
          }),
          await p(i));
      }
    }
    function d(e) {
      var t = new Map();
      for (var n of e) {
        var r = n.parentMsg.id.toString(),
          o = t.get(r);
        o != null ? o.push(n) : t.set(r, [n]);
      }
      return t;
    }
    function m(e, t) {
      var n = e.pollOptions ? [].concat(e.pollOptions) : [],
        r = n.length,
        a = new Set(
          n.map(function (e) {
            return e.name;
          }),
        ),
        i = o("WAWebPollsGatingUtils").getMaxPollOptionCount(),
        l = n.length;
      for (var s of t) {
        var u = s.decryptedAddOption.pollAddedOption.name;
        if (!a.has(u)) {
          if (n.length >= i) break;
          (n.push({ name: u, localId: l }), a.add(u), l++);
        }
      }
      return n.length === r
        ? null
        : babelHelpers.extends({}, e, { pollOptions: n });
    }
    async function p(e) {
      if (e.length !== 0) {
        var t = new Map();
        for (var n of e) {
          var r = n.chatId,
            a = n.msg,
            i = t.get(r);
          i != null ? i.push(a) : t.set(r, [a]);
        }
        var l = await Promise.allSettled(
          Array.from(t, async function (e) {
            var t = e[0],
              n = e[1],
              r = o("WAWebWidFactory").createWid(t);
            await o("WAWebBackendApi").frontendSendAndReceive(
              "processMultipleMessages",
              {
                chatId: r,
                msgObjs: n,
                meta: { add: "last", isHistory: !1 },
                processMessagesOrigin: "pollAddOptionMessage",
              },
            );
          }),
        );
        for (var s of l)
          s.status === "rejected" &&
            o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "applyPollAddOptionsToParent: frontend notification failed",
                  ])),
              )
              .sendLogs("poll_add_option_notify_failed");
      }
    }
    ((l.applyPollAddOptionsToParent = c),
      (l.groupResultsByParent = d),
      (l.mergeAddOptionsIntoParent = m));
  },
  98,
);
