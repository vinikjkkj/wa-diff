__d(
  "WAWebVoipOngoingCallCollection",
  [
    "Promise",
    "WALogger",
    "WAWebBaseCollection",
    "WAWebCallCollection",
    "WAWebCallLogMsgData.flow",
    "WAWebDBMessageFindLocal",
    "WAWebDBUpdateMessageTable",
    "WAWebMsgGetters",
    "WAWebMsgModel",
    "WAWebProcessMultipleMsgsAction",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m = Date.now(),
      p = (function (t) {
        function a() {
          var e;
          return (
            (e = t.call(this) || this),
            (e.$WAWebVoipOngoingCallCollectionImpl$p_1 =
              e.$WAWebVoipOngoingCallCollectionImpl$p_2()),
            e
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.hasOngoingJoinableGroupCalls = function () {
            return this.length > 0;
          }),
          (i.chatHasOngoingJoinableGroupCall = function (t) {
            return this.toArray().some(function (e) {
              return e.id.remote === t.id;
            });
          }),
          (i.getByCallId = function (t) {
            return this.toArray().find(function (e) {
              return e.id.id === t;
            });
          }),
          (i.getByChat = function (t) {
            return this.toArray().find(function (e) {
              return e.id.remote === t.id;
            });
          }),
          (i.$WAWebVoipOngoingCallCollectionImpl$p_2 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = yield this.$WAWebVoipOngoingCallCollectionImpl$p_3();
              (yield this.$WAWebVoipOngoingCallCollectionImpl$p_4(e),
                this.add(
                  e.filter(function (e) {
                    return o("WAWebMsgGetters").getIsGroupCall(e);
                  }),
                ),
                (this.$WAWebVoipOngoingCallCollectionImpl$p_1 = null));
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.$WAWebVoipOngoingCallCollectionImpl$p_4 = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var a;
                if (t.length !== 0) {
                  var i =
                      (a = r("WAWebCallCollection").activeCall) == null
                        ? void 0
                        : a.id,
                    l = t.filter(function (t) {
                      return o("WAWebMsgGetters").getIsGroupCall(t) ||
                        o("WAWebMsgGetters").getFinalCallOutcome(t) ===
                          o("WAWebCallLogMsgData.flow").CallOutcome.Completed
                        ? !1
                        : i != null && t.id.id === i
                          ? (o("WALogger").LOG(
                              e ||
                                (e = babelHelpers.taggedTemplateLiteralLoose([
                                  "[voip] crash cleanup: skipping active call ",
                                  "",
                                ])),
                              t.id.id,
                            ),
                            !1)
                          : t.t != null && t.t * 1e3 >= m
                            ? (o("WALogger").LOG(
                                s ||
                                  (s = babelHelpers.taggedTemplateLiteralLoose([
                                    "[voip] crash cleanup: skip recent call ",
                                    " (this session)",
                                  ])),
                                t.id.id,
                              ),
                              !1)
                            : !0;
                    });
                  if (l.length !== 0) {
                    o("WALogger").LOG(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "[voip] crash cleanup: ",
                          " 1:1 calls marked complete",
                        ])),
                      l.length,
                    );
                    var p = l.map(
                      (function () {
                        var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                          function* (e) {
                            try {
                              var t = {
                                finalCallOutcome: o("WAWebCallLogMsgData.flow")
                                  .CallOutcome.Completed,
                              };
                              (o(
                                "WAWebDBUpdateMessageTable",
                              ).updateMessageTable(e.id, t),
                                e.set(t));
                            } catch (t) {
                              var n;
                              o("WALogger").LOG(
                                c ||
                                  (c = babelHelpers.taggedTemplateLiteralLoose([
                                    "voip: crash cleanup: Failed to clean up call log ",
                                    ": ",
                                    "",
                                  ])),
                                (n = e.id) == null ? void 0 : n.id,
                                t,
                              );
                            }
                          },
                        );
                        return function (t) {
                          return e.apply(this, arguments);
                        };
                      })(),
                    );
                    yield (d || (d = n("Promise"))).all(p);
                  }
                }
              },
            );
            function a(e) {
              return t.apply(this, arguments);
            }
            return a;
          })()),
          (i.$WAWebVoipOngoingCallCollectionImpl$p_3 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = yield o(
                "WAWebDBMessageFindLocal",
              ).getVoipOngoingCallLogMessages();
              return o(
                "WAWebProcessMultipleMsgsAction",
              )._processMultipleMessages(
                void 0,
                e,
                { add: "search" },
                "msgCollectionGetVoipCallLogs",
              );
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          a
        );
      })(o("WAWebBaseCollection").BaseCollection);
    p.model = o("WAWebMsgModel").Msg;
    var _ = new p();
    l.WAWebVoipOngoingCallCollection = _;
  },
  98,
);
