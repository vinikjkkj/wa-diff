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
      m,
      p = Date.now(),
      _ = (function (t) {
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
          (i.waitUntilLoaded = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (this.$WAWebVoipOngoingCallCollectionImpl$p_1 != null)
                try {
                  yield this.$WAWebVoipOngoingCallCollectionImpl$p_1;
                } catch (e) {}
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.$WAWebVoipOngoingCallCollectionImpl$p_2 = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              try {
                var t = yield this.$WAWebVoipOngoingCallCollectionImpl$p_3();
                (yield this.$WAWebVoipOngoingCallCollectionImpl$p_4(t),
                  this.add(
                    t.filter(function (e) {
                      return o("WAWebMsgGetters").getIsGroupCall(e);
                    }),
                  ));
              } catch (t) {
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[WAWebVoipOngoingCallCollection] init failed: ",
                        "",
                      ])),
                    t,
                  )
                  .tags("nexus-voip")
                  .sendLogs("voip-ongoing-call-collection-init-failed");
              } finally {
                this.$WAWebVoipOngoingCallCollectionImpl$p_1 = null;
              }
            });
            function r() {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          (i.$WAWebVoipOngoingCallCollectionImpl$p_4 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t;
                if (e.length !== 0) {
                  var a =
                      (t = r("WAWebCallCollection").activeCall) == null
                        ? void 0
                        : t.id,
                    i = e.filter(function (e) {
                      return o("WAWebMsgGetters").getIsGroupCall(e) ||
                        o("WAWebMsgGetters").getFinalCallOutcome(e) ===
                          o("WAWebCallLogMsgData.flow").CallOutcome.Completed
                        ? !1
                        : a != null && e.id.id === a
                          ? (o("WALogger").LOG(
                              s ||
                                (s = babelHelpers.taggedTemplateLiteralLoose([
                                  "[voip] crash cleanup: skipping active call ",
                                  "",
                                ])),
                              e.id.id,
                            ),
                            !1)
                          : e.t != null && e.t * 1e3 >= p
                            ? (o("WALogger").LOG(
                                u ||
                                  (u = babelHelpers.taggedTemplateLiteralLoose([
                                    "[voip] crash cleanup: skip recent call ",
                                    " (this session)",
                                  ])),
                                e.id.id,
                              ),
                              !1)
                            : !0;
                    });
                  if (i.length !== 0) {
                    o("WALogger").LOG(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "[voip] crash cleanup: ",
                          " 1:1 calls marked complete",
                        ])),
                      i.length,
                    );
                    var l = i.map(
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
                                d ||
                                  (d = babelHelpers.taggedTemplateLiteralLoose([
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
                    yield (m || (m = n("Promise"))).all(l);
                  }
                }
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
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
    _.model = o("WAWebMsgModel").Msg;
    var f = new _();
    l.WAWebVoipOngoingCallCollection = f;
  },
  98,
);
