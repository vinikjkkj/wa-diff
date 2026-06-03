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
            var a = p(t),
              i = Array.from(a.keys()),
              l = [];
            (yield o("WAWebModelStorageUtils")
              .getStorage()
              .lock(
                ["message"],
                (function () {
                  var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (t) {
                      var n = t[0],
                        u = yield n.bulkGet(i),
                        c = [];
                      (i.forEach(function (t, n) {
                        var i = u[n],
                          d = a.get(t);
                        if (i == null || d == null) {
                          i == null &&
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
                        var m = o(
                          "WAWebDBMessageSerialization",
                        ).messageFromDbRow(i);
                        if (
                          m.type !== o("WAWebMsgType").MSG_TYPE.POLL_CREATION
                        ) {
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
                        var p = r("WAWebCastToPollCreationMsg")(m),
                          f = _(p, d);
                        f != null &&
                          (c.push(f),
                          l.push({ msg: f, chatId: p.id.remote.toString() }));
                      }),
                        c.length > 0 &&
                          (yield n.bulkCreateOrMerge(
                            c.map(function (e) {
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
              ),
              yield f(l));
          }
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      var t = new Map();
      for (var n of e) {
        var r = n.parentMsg.id.toString(),
          o = t.get(r);
        o != null ? o.push(n) : t.set(r, [n]);
      }
      return t;
    }
    function _(e, t) {
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
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.length !== 0) {
            var t = new Map();
            for (var r of e) {
              var a = r.chatId,
                i = r.msg,
                l = t.get(a);
              l != null ? l.push(i) : t.set(a, [i]);
            }
            var s = yield (c || (c = n("Promise"))).allSettled(
              Array.from(
                t,
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      var t = e[0],
                        n = e[1],
                        r = o("WAWebWidFactory").createWid(t);
                      yield o("WAWebBackendApi").frontendSendAndReceive(
                        "processMultipleMessages",
                        {
                          chatId: r,
                          msgObjs: n,
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
            for (var d of s)
              d.status === "rejected" &&
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
        g.apply(this, arguments)
      );
    }
    ((l.applyPollAddOptionsToParent = d),
      (l.groupResultsByParent = p),
      (l.mergeAddOptionsIntoParent = _));
  },
  98,
);
