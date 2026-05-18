__d(
  "WAWebOfflineSimulatorGenerator",
  [
    "Promise",
    "WAComms",
    "WALogger",
    "WAPromiseReduce",
    "WAWebEventsWaitForOfflineDeliveryEnd",
    "WAWebOfflineSimulatorInfoBulletin",
    "WAWebOfflineSimulatorMsg",
    "WAWebOfflineSimulatorNotification",
    "WAWebOfflineSimulatorReceipt",
    "WAWebOfflineSimulatorSuccess",
    "WAWebOfflineSimulatorTypes.flow",
    "asyncToGeneratorRuntime",
    "countWhere",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = 26;
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          a === void 0 && (a = {});
          var i = [],
            l = 0;
          for (var s in t)
            if (Object.prototype.hasOwnProperty.call(t, s)) {
              var u = t[s],
                c = void 0;
              try {
                c = yield o("WAPromiseReduce").promiseReduce(
                  u,
                  (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (e, t) {
                        var n = t.count || 1,
                          r,
                          a,
                          i,
                          l = t.from;
                        switch (t.type) {
                          case o("WAWebOfflineSimulatorTypes.flow")
                            .OfflineSimuilatorItemType.Msg:
                            return ((r = yield _(t)), e.concat(r));
                          case o("WAWebOfflineSimulatorTypes.flow")
                            .OfflineSimuilatorItemType.Reaction:
                            return ((r = yield g(t)), e.concat(r));
                          case o("WAWebOfflineSimulatorTypes.flow")
                            .OfflineSimuilatorItemType.GroupNotification:
                            return (
                              (a = yield o(
                                "WAWebOfflineSimulatorNotification",
                              ).createGroupChangeNotifications(l, n)),
                              y(a, e)
                            );
                          case o("WAWebOfflineSimulatorTypes.flow")
                            .OfflineSimuilatorItemType.GroupSubject:
                            return y(
                              o(
                                "WAWebOfflineSimulatorNotification",
                              ).createGroupSubjectNotifications(l, n),
                              e,
                            );
                          case o("WAWebOfflineSimulatorTypes.flow")
                            .OfflineSimuilatorItemType.IdentityNotification:
                            return (
                              (a = yield o(
                                "WAWebOfflineSimulatorNotification",
                              ).createIdentityChangeNotification(n)),
                              y(a, e)
                            );
                          case o("WAWebOfflineSimulatorTypes.flow")
                            .OfflineSimuilatorItemType.Receipt:
                            return (
                              (i = o(
                                "WAWebOfflineSimulatorReceipt",
                              ).createReceiptStanza(n)),
                              y(i, e)
                            );
                          case o("WAWebOfflineSimulatorTypes.flow")
                            .OfflineSimuilatorItemType.CommunityLink:
                            return (
                              (a = yield o(
                                "WAWebOfflineSimulatorNotification",
                              ).createCommunityLinkNotification(n)),
                              y(a, e)
                            );
                        }
                      },
                    );
                    return function (t, n) {
                      return e.apply(this, arguments);
                    };
                  })(),
                  [],
                );
              } catch (t) {
                (o("WALogger").ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "mockOfflineTraffic: error while generating messages: ",
                      "",
                    ])),
                  r("getErrorSafe")(t).stack,
                ),
                  (c = []));
              }
              (a.includeThreadMetadata === !0 &&
                c.unshift(
                  o("WAWebOfflineSimulatorInfoBulletin").createThreadMetatadaIB(
                    c,
                  ),
                ),
                c.unshift(
                  o("WAWebOfflineSimulatorSuccess").createSuccessStanza(d),
                  o("WAWebOfflineSimulatorInfoBulletin").createOfflinePreviewIb(
                    r("countWhere")(c, function (e) {
                      return e.tag === "message";
                    }),
                    r("countWhere")(c, function (e) {
                      return e.tag === "receipt";
                    }),
                    r("countWhere")(c, function (e) {
                      return e.tag === "notification";
                    }),
                  ),
                ),
                (l += c.length),
                i.push(c));
            }
          return {
            stanzas: i,
            ibComplete: o(
              "WAWebOfflineSimulatorInfoBulletin",
            ).createOfflineCompleteIb(l),
          };
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
          for (var t = [], r = 0; r < e.count; r++) {
            var a = r + 1;
            t.push(o("WAWebOfflineSimulatorMsg").createChatTextMsgStanza(e, a));
          }
          var i = yield (c || (c = n("Promise"))).all(t);
          return (
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "mockOfflineTraffic: generated ",
                  " msgs for ",
                  "",
                ])),
              i.length,
              String(e.from),
            ),
            i
          );
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          for (var t = [], n = 0; n < e.count; n++) {
            var r = n + 1,
              a = yield o(
                "WAWebOfflineSimulatorMsg",
              ).createChatTextMsgStanzaWithReactions(e, r, "\u2764\uFE0F");
            (t.push.apply(t, a),
              r % 100 === 0 &&
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[mockOfflineTrafficWithReactions] ",
                      " msgs, ",
                      " reactions for ",
                      "",
                    ])),
                  r,
                  r,
                  String(e.from),
                ));
          }
          return t;
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t) {
      for (
        var n = [], r = 0, o = 0, a = e.length, i = t.length;
        r < a && o < i;
      )
        Math.random() <= a / (a + i)
          ? (n.push(e[r]), r++)
          : (n.push(t[o]), o++);
      for (; r < a; r++) n.push(e[r]);
      for (; o < i; o++) n.push(t[o]);
      return n;
    }
    function C(e, t, n) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          var a = Array.isArray(t) ? { "chunk-1": t } : t,
            i = yield m(a, r),
            l = 0;
          function s(e) {
            return u.apply(this, arguments);
          }
          function u() {
            return (
              (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
                var r, a;
                t === void 0 && (t = {});
                var l = i.stanzas,
                  s = (r = t.limitMsgs) != null ? r : 1 / 0,
                  u = (a = t.skipMsgs) != null ? a : 0;
                function d(e) {
                  return m.apply(this, arguments);
                }
                function m() {
                  return (
                    (m = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (t) {
                        for (var n = 0; n < t.length; n++) {
                          if (s === 0) return;
                          var r = t[n];
                          (u === 0 &&
                            (yield e.handleStanza(
                              r,
                              o("WAComms").DEFAULT_SOCKET_ID,
                              0,
                            ),
                            r.tag === "message" && s !== 1 / 0 && s--),
                            r.tag === "message" && u !== 0 && u--);
                        }
                      },
                    )),
                    m.apply(this, arguments)
                  );
                }
                yield (c || (c = n("Promise"))).all(
                  l.map(function (e) {
                    return d(e);
                  }),
                );
              })),
              u.apply(this, arguments)
            );
          }
          function d() {
            return p.apply(this, arguments);
          }
          function p() {
            return (
              (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                (yield s({ skipMsgs: l }),
                  e.handleStanza(
                    i.ibComplete,
                    o("WAComms").DEFAULT_SOCKET_ID,
                    0,
                  ),
                  yield o(
                    "WAWebEventsWaitForOfflineDeliveryEnd",
                  ).waitForOfflineDeliveryEnd());
              })),
              p.apply(this, arguments)
            );
          }
          return {
            complete: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* () {
                  return d();
                },
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
            allExceptComplete: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* () {
                  return s();
                },
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
            nMessages: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  (yield s({ skipMsgs: l, limitMsgs: e }), (l += e));
                },
              );
              function t(t) {
                return e.apply(this, arguments);
              }
              return t;
            })(),
            receiveAll: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* () {
                  return d();
                },
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          };
        })),
        b.apply(this, arguments)
      );
    }
    l.createTrafficHandler = C;
  },
  98,
);
