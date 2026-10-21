__d(
  "WAWebApplyPollAddOptionToParent",
  [
    "Promise",
    "WALogger",
    "WAWebBackendApi",
    "WAWebCastToPollCreationMsg",
    "WAWebDBMessageSerialization",
    "WAWebLoadPendingPollVoteResolver",
    "WAWebModelStorageUtils",
    "WAWebMsgType",
    "WAWebPollsGatingUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (t.length !== 0) {
            var a = h(t),
              i = Array.from(a.keys()),
              l = [],
              u = [];
            (yield o("WAWebModelStorageUtils")
              .getStorage()
              .lock(
                ["message"],
                (function () {
                  var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (t) {
                      var n = t[0],
                        c = yield n.bulkGet(i),
                        d = [];
                      (i.forEach(function (t, n) {
                        var i = c[n],
                          m = a.get(t);
                        if (i == null || m == null) {
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
                        var p = o(
                          "WAWebDBMessageSerialization",
                        ).messageFromDbRow(i);
                        if (
                          p.type !== o("WAWebMsgType").MSG_TYPE.POLL_CREATION
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
                        var _ = r("WAWebCastToPollCreationMsg")(p),
                          f = y(_, m);
                        (u.push(
                          g(
                            f != null ? r("WAWebCastToPollCreationMsg")(f) : _,
                            m,
                          ),
                        ),
                          f != null &&
                            (d.push(f),
                            l.push({
                              msg: f,
                              chatId: _.id.remote.toString(),
                            })));
                      }),
                        d.length > 0 &&
                          (yield n.bulkCreateOrMerge(
                            d.map(function (e) {
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
              yield C(l),
              yield _(u));
          }
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.filter(function (e) {
            var t = e.addedOptions,
              n = e.droppedOptions;
            return t.length > 0 || n.length > 0;
          });
          if (t.length !== 0)
            try {
              var a = yield r("WAWebLoadPendingPollVoteResolver")(),
                i = a.resolvePendingVotesForAddedOptions;
              yield (d || (d = n("Promise"))).all(
                t.map(function (e) {
                  return i(e);
                }),
              );
            } catch (e) {
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[polls] failed to load the parked poll vote resolver",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("poll-add-option-resolve-votes-load-failed");
            }
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t) {
      var n,
        r,
        o = new Set(
          ((n = e.pollOptions) != null ? n : []).map(function (e) {
            return e.addOptionMsgKey;
          }),
        ),
        a = new Set(
          ((r = e.pollOptions) != null ? r : []).map(function (e) {
            return e.name;
          }),
        ),
        i = [],
        l = [];
      for (var s of t) {
        var u = s.decryptedAddOption,
          c = { name: u.pollAddedOption.name, t: u.t };
        o.has(u.id.toString()) ? i.push(c) : a.has(c.name) || l.push(c);
      }
      return { parentMsg: e, addedOptions: i, droppedOptions: l };
    }
    function h(e) {
      var t = new Map();
      for (var n of e) {
        var r = n.parentMsg.id.toString(),
          o = t.get(r);
        o != null ? o.push(n) : t.set(r, [n]);
      }
      return t;
    }
    function y(e, t) {
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
          (n.push({
            name: u,
            localId: l,
            addOptionMsgKey: s.decryptedAddOption.id.toString(),
          }),
            a.add(u),
            l++);
        }
      }
      return n.length === r
        ? null
        : babelHelpers.extends({}, e, { pollOptions: n });
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.length !== 0) {
            var t = new Map();
            for (var r of e) {
              var a = r.chatId,
                i = r.msg,
                l = t.get(a);
              l != null ? l.push(i) : t.set(a, [i]);
            }
            var s = yield (d || (d = n("Promise"))).allSettled(
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
            for (var u of s)
              u.status === "rejected" &&
                o("WALogger")
                  .ERROR(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "applyPollAddOptionsToParent: frontend notification failed",
                      ])),
                  )
                  .sendLogs("poll_add_option_notify_failed");
          }
        })),
        b.apply(this, arguments)
      );
    }
    ((l.applyPollAddOptionsToParent = m),
      (l.groupResultsByParent = h),
      (l.mergeAddOptionsIntoParent = y));
  },
  98,
);
