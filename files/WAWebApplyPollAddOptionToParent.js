__d(
  "WAWebApplyPollAddOptionToParent",
  [
    "Promise",
    "WALogger",
    "WAWebBackendApi",
    "WAWebCastToPollCreationMsg",
    "WAWebDBMessageSerialization",
    "WAWebModelStorageUtils",
    "WAWebMsgType",
    "WAWebPollsGatingUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (t.length !== 0) {
            var a = new Map();
            for (var i of t) {
              var l = i.parentMsg.id.toString(),
                d = a.get(l);
              d != null ? d.push(i) : a.set(l, [i]);
            }
            var m = Array.from(a.keys()),
              p = [];
            yield o("WAWebModelStorageUtils")
              .getStorage()
              .lock(
                ["message"],
                (function () {
                  var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (t) {
                      var n = t[0],
                        i = yield n.bulkGet(m),
                        l = [];
                      (m.forEach(function (t, n) {
                        var u,
                          c,
                          d = i[n],
                          m = a.get(t);
                        if (d == null || m == null) {
                          d == null &&
                            o("WALogger")
                              .ERROR(
                                e ||
                                  (e = babelHelpers.taggedTemplateLiteralLoose([
                                    "applyPollAddOptionsToParent: parent message not found for key ",
                                    "",
                                  ])),
                                t,
                              )
                              .sendLogs("poll_add_option_parent_not_found");
                          return;
                        }
                        var _ = o(
                          "WAWebDBMessageSerialization",
                        ).messageFromDbRow(d);
                        if (
                          _.type !== o("WAWebMsgType").MSG_TYPE.POLL_CREATION
                        ) {
                          o("WALogger")
                            .ERROR(
                              s ||
                                (s = babelHelpers.taggedTemplateLiteralLoose([
                                  "applyPollAddOptionsToParent: parent message is not a poll creation message",
                                ])),
                            )
                            .sendLogs("poll_add_option_parent_not_poll");
                          return;
                        }
                        var f = r("WAWebCastToPollCreationMsg")(_),
                          g = f.pollOptions ? [].concat(f.pollOptions) : [],
                          h = new Set(
                            g.map(function (e) {
                              return e.name;
                            }),
                          ),
                          y = g.length;
                        for (var C of m) {
                          var b = C.decryptedAddOption.pollAddedOption.name;
                          if (!h.has(b)) {
                            if (
                              g.length >=
                              o("WAWebPollsGatingUtils").getMaxPollOptionCount()
                            )
                              break;
                            (g.push({ name: b, localId: y }), h.add(b), y++);
                          }
                        }
                        if (
                          g.length !==
                          ((u =
                            (c = f.pollOptions) == null ? void 0 : c.length) !=
                          null
                            ? u
                            : 0)
                        ) {
                          var v = babelHelpers.extends({}, f, {
                            pollOptions: g,
                          });
                          (l.push(v),
                            p.push({ msg: v, chatId: f.id.remote.toString() }));
                        }
                      }),
                        l.length > 0 &&
                          (yield n.bulkCreateOrMerge(
                            l.map(function (e) {
                              return o(
                                "WAWebDBMessageSerialization",
                              ).dbRowFromMessage(e);
                            }),
                          )));
                    },
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              );
            var _ = yield (c || (c = n("Promise"))).allSettled(
              p.map(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      var t = e.chatId,
                        n = e.msg,
                        r = o("WAWebWidFactory").createWid(t);
                      yield o("WAWebBackendApi").frontendSendAndReceive(
                        "processMultipleMessages",
                        {
                          chatId: r,
                          msgObjs: [n],
                          meta: { add: "last", isHistory: !1 },
                          processMessagesOrigin: "pollAddOptionMessage",
                        },
                      );
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              ),
            );
            for (var f of _)
              f.status === "rejected" &&
                o("WALogger")
                  .ERROR(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "applyPollAddOptionsToParent: frontend notification failed",
                      ])),
                  )
                  .sendLogs("poll_add_option_notify_failed");
          }
        })),
        m.apply(this, arguments)
      );
    }
    l.applyPollAddOptionsToParent = d;
  },
  98,
);
