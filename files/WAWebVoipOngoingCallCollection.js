__d(
  "WAWebVoipOngoingCallCollection",
  [
    "WALogger",
    "WAWebBaseCollection",
    "WAWebCallCollection",
    "WAWebCallLogMsgData.flow",
    "WAWebDBMessageFindLocal",
    "WAWebDBUpdateMessageTable",
    "WAWebDbEncryptionKey",
    "WAWebMsgGetters",
    "WAWebMsgModel",
    "WAWebProcessMultipleMsgsAction",
    "WAWebVoipGatingUtils",
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
        function n() {
          var e;
          return (
            (e = t.call(this) || this),
            (e.$WAWebVoipOngoingCallCollectionImpl$p_1 =
              e.$WAWebVoipOngoingCallCollectionImpl$p_2()),
            e
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.hasOngoingJoinableGroupCalls = function () {
            return this.length > 0;
          }),
          (a.chatHasOngoingJoinableGroupCall = function (t) {
            return this.toArray().some(function (e) {
              return e.id.remote === t.id;
            });
          }),
          (a.getByCallId = function (t) {
            return this.toArray().find(function (e) {
              return e.id.id === t;
            });
          }),
          (a.getByChat = function (t) {
            return this.toArray().find(function (e) {
              return e.id.remote === t.id;
            });
          }),
          (a.findOngoingCallActiveOnOtherSelfDevice = function () {
            var e;
            if (!o("WAWebVoipGatingUtils").isDeviceSwitchingEnabled())
              return null;
            var t =
              (e = r("WAWebCallCollection").activeCall) == null ? void 0 : e.id;
            return this.toArray().find(function (e) {
              return (
                o("WAWebMsgGetters").getSelfOtherDeviceConnected(e) === !0 &&
                e.id.id !== t
              );
            });
          }),
          (a.waitUntilLoaded = async function () {
            if (this.$WAWebVoipOngoingCallCollectionImpl$p_1 != null)
              try {
                await this.$WAWebVoipOngoingCallCollectionImpl$p_1;
              } catch (e) {}
          }),
          (a.$WAWebVoipOngoingCallCollectionImpl$p_2 = async function () {
            try {
              await o(
                "WAWebDbEncryptionKey",
              ).DbEncKeyStore.waitForFinalDbMsgEncKey();
              var t = await this.$WAWebVoipOngoingCallCollectionImpl$p_3();
              (await this.$WAWebVoipOngoingCallCollectionImpl$p_4(t),
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
          }),
          (a.$WAWebVoipOngoingCallCollectionImpl$p_4 = async function (t) {
            var e;
            if (t.length !== 0) {
              var n =
                  (e = r("WAWebCallCollection").activeCall) == null
                    ? void 0
                    : e.id,
                a = t.filter(function (e) {
                  return o("WAWebMsgGetters").getIsGroupCall(e) ||
                    o("WAWebMsgGetters").getFinalCallOutcome(e) ===
                      o("WAWebCallLogMsgData.flow").CallOutcome.Completed
                    ? !1
                    : n != null && e.id.id === n
                      ? (o("WALogger").LOG(
                          s ||
                            (s = babelHelpers.taggedTemplateLiteralLoose([
                              "[voip] crash cleanup: skipping active call ",
                              "",
                            ])),
                          e.id.id,
                        ),
                        !1)
                      : e.t != null && e.t * 1e3 >= m
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
              if (a.length !== 0) {
                o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[voip] crash cleanup: ",
                      " 1:1 calls marked complete",
                    ])),
                  a.length,
                );
                var i = a.map(async function (e) {
                  try {
                    var t = {
                      finalCallOutcome: o("WAWebCallLogMsgData.flow")
                        .CallOutcome.Completed,
                    };
                    (o("WAWebDBUpdateMessageTable").updateMessageTable(e.id, t),
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
                });
                await Promise.all(i);
              }
            }
          }),
          (a.$WAWebVoipOngoingCallCollectionImpl$p_3 = async function () {
            var e = await o(
              "WAWebDBMessageFindLocal",
            ).getVoipOngoingCallLogMessages();
            return o("WAWebProcessMultipleMsgsAction")._processMultipleMessages(
              void 0,
              e,
              { add: "search" },
              "msgCollectionGetVoipCallLogs",
            );
          }),
          n
        );
      })(o("WAWebBaseCollection").BaseCollection);
    p.model = o("WAWebMsgModel").Msg;
    var _ = new p();
    l.WAWebVoipOngoingCallCollection = _;
  },
  98,
);
