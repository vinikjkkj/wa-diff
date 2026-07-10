__d(
  "WAWebDebugDownFunnelSignals",
  [
    "WAArrayBufferUtils",
    "WALogger",
    "WASmaxBizSettingsGetPrivacySettingRPC",
    "WASmaxInBizSettingsEnums",
    "WATimeUtils",
    "WAWebCTWADataSharingModel",
    "WAWebChatCollection",
    "WAWebCmd",
    "WAWebCommonCTWAConsumerTransparency",
    "WAWebConsumerTransparencyInfoIconModel",
    "WAWebContactSystemMsg",
    "WAWebConversionTupleCollection",
    "WAWebConversionTupleModel",
    "WAWebDataSharingOptInCoolOffModel",
    "WAWebDataSharingUpsellModel",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebIndividualNewChatMessageCappingLimitUtils",
    "WAWebLabelCollection",
    "WAWebMobilePlatforms",
    "WAWebMsgType",
    "WAWebSMBDataSharingSettingAction",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsStore",
    "WAWebUserPrefsTypes",
    "asyncToGeneratorRuntime",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b,
      v,
      S,
      R,
      L,
      E,
      k,
      I,
      T,
      D,
      x,
      $,
      P,
      N,
      M,
      w,
      A,
      F,
      O,
      B,
      W,
      q,
      U,
      V,
      H,
      G,
      z,
      j,
      K,
      Q,
      X,
      Y,
      J,
      Z,
      ee,
      te;
    function ne() {
      o("WAWebCmd").Cmd.on("open_chat", function (e) {
        var t = e.chat;
        te = t;
      });
    }
    var re = (function () {
      var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
        return o("WAWebSMBDataSharingSettingAction")
          .setSMBDataSharingSettingAction(
            o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.notset,
            t,
          )
          .then(function (t) {
            var n;
            return (
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "debug:resetDataSharingToNotset",
                  ])),
              ),
              (n = t == null ? void 0 : t.value) != null ? n : null
            );
          })
          .catch(function (e) {
            o("WALogger").ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "error:debug:resetDataSharingToNotset",
                ])),
            );
          });
      });
      return function (n) {
        return t.apply(this, arguments);
      };
    })();
    ((re.doc =
      'DFS - resets SMB Data Sharing setting on the server. Sets the value to "notset" (optional version)'),
      (re.paramsToExecute = []));
    var oe = (function () {
      var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
        return o("WAWebSMBDataSharingSettingAction")
          .setSMBDataSharingSettingAction(e, t)
          .then(function (e) {
            return (
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "debug:dataSharingSettingServerSet",
                  ])),
              ),
              e
            );
          })
          .catch(function (e) {
            return (
              o("WALogger").ERROR(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "error:debug:dataSharingSettingServerSet",
                  ])),
              ),
              null
            );
          });
      });
      return function (n, r) {
        return e.apply(this, arguments);
      };
    })();
    ((oe.doc =
      'DFS - Sets the SMB Data Sharing setting on the server to a given value ("true"/"false"/"notset") and optional disclosure version'),
      (oe.paramsToExecute = [
        o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true,
        2,
      ]));
    var ae = function (t) {
      (o("WAWebCTWADataSharingModel").CTWADataSharingModel.setValue(
        o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.notset,
        t,
      ),
        o("WALogger").LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              'debug:resetDataSharingToNotsetLocal: local model reset to "notset"',
            ])),
        ));
    };
    ((ae.doc =
      "DFS - resets SMB Data Sharing setting locally (client-only, no server RPC; optional version)"),
      (ae.paramsToExecute = []));
    var ie = function (t) {
      (o("WAWebCTWADataSharingModel").CTWADataSharingModel.setValue(
        o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true,
        t,
      ),
        o("WALogger").LOG(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              'debug:setDataSharingToOptInLocal: local model set to "true"',
            ])),
        ));
    };
    ((ie.doc =
      "DFS - sets SMB Data Sharing setting to true locally (client-only, no server RPC; optional version)"),
      (ie.paramsToExecute = []));
    var le = function (t) {
      (o("WAWebCTWADataSharingModel").CTWADataSharingModel.setValue(
        o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.false,
        t,
      ),
        o("WALogger").LOG(
          p ||
            (p = babelHelpers.taggedTemplateLiteralLoose([
              'debug:setDataSharingToOptOutLocal: local model set to "false"',
            ])),
        ));
    };
    ((le.doc =
      "DFS - sets SMB Data Sharing setting to false locally (client-only, no server RPC; optional version)"),
      (le.paramsToExecute = []));
    var se = function () {
      (r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").KEYS.CTWA_DATA_SHARING_V2_DISCLOSURE_SEEN,
        null,
      ),
        o("WALogger").LOG(
          _ ||
            (_ = babelHelpers.taggedTemplateLiteralLoose([
              "debug:dfsResetV2DisclosureSeen: cleared the v2 disclosure-seen flag",
            ])),
        ));
    };
    ((se.doc =
      'DFS - Resets the "v2 disclosure seen" flag so the v2 (ePD) disclosure is treated as not-yet-seen and can be shown again.'),
      (se.paramsToExecute = []));
    var ue = (function () {
      var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        try {
          var e = yield o(
            "WASmaxBizSettingsGetPrivacySettingRPC",
          ).sendGetPrivacySettingRPC();
          if (e.name === "GetPrivacySettingResponseSuccess") {
            var t = e.value.privacySmbDataSharingSettingMixin,
              n = { value: t.value, version: t.version };
            return (
              o("WALogger").LOG(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "debug:dataSharingSettingServerFetch",
                  ])),
              ),
              n
            );
          }
          return (
            o("WALogger").ERROR(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "error:debug:dataSharingSettingServerFetch",
                ])),
            ),
            null
          );
        } catch (e) {
          return (
            o("WALogger").ERROR(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "error:debug:dataSharingSettingServerFetch",
                ])),
            ),
            null
          );
        }
      });
      return function () {
        return e.apply(this, arguments);
      };
    })();
    ((ue.doc =
      "DFS - Fetches the SMB Data Sharing setting (value + disclosure version) from the server"),
      (ue.paramsToExecute = []));
    var ce = function () {
      var e = {
        value: o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue(),
        version: o(
          "WAWebCTWADataSharingModel",
        ).CTWADataSharingModel.getVersion(),
      };
      return (
        o("WALogger").LOG(
          y ||
            (y = babelHelpers.taggedTemplateLiteralLoose([
              "debug:dataSharingSettingLocalFetch",
            ])),
        ),
        e
      );
    };
    ((ce.doc =
      "DFS - Reads the SMB Data Sharing setting (value + disclosure version) from the local client model (no server RPC)"),
      (ce.paramsToExecute = []));
    var de = function (t) {
      var e,
        n,
        a =
          (t == null ? void 0 : t.chatId) || ((e = te) == null ? void 0 : e.id),
        i = (n = t == null ? void 0 : t.payload) != null ? n : "mock_data";
      if (a == null) {
        o("WALogger").ERROR(
          C ||
            (C = babelHelpers.taggedTemplateLiteralLoose([
              "error:debug:dfsMockCtwaPayloadForCurrentChatOrChatId: please open any 1:1 chat you would like to mock by clicking on it in the chat list. Or provide a chatId to the method.",
            ])),
        );
        return;
      }
      var l = new (o("WAWebConversionTupleModel").ConversionTuple)({
        id: a,
        timestamp: o("WATimeUtils").unixTime(),
        conversionSource: "FB_Ads",
        conversionData: o("WAArrayBufferUtils").stringToArrayBuffer(i),
        ctwaSignals: t == null ? void 0 : t.ctwaSignals,
      });
      try {
        (r("WAWebConversionTupleCollection").remove(a),
          r("WAWebConversionTupleCollection").add(l, { merge: !0 }),
          o("WALogger").LOG(
            b ||
              (b = babelHelpers.taggedTemplateLiteralLoose([
                'debug:dfsMockCtwaPayloadForCurrentChatOrChatId: Mocked CTWA payload for chat "',
                '" with value of "',
                '" successfully',
              ])),
            a,
            i,
          ));
      } catch (e) {
        o("WALogger").ERROR(
          v ||
            (v = babelHelpers.taggedTemplateLiteralLoose([
              "error:debug:dfsMockCtwaPayloadForCurrentChatOrChatId: Error adding CTWA payload to chat ",
              "",
            ])),
          a,
        );
      }
    };
    ((de.doc =
      "DFS - Adds CTWA payload to current chat. This will be used by the l10n team and in bug bashes."),
      (de.paramsToExecute = []));
    function me(e) {
      var t,
        n,
        a = e.chatId || ((t = te) == null ? void 0 : t.id),
        i = (n = e.payload) != null ? n : "mock_data";
      if (a == null) {
        o("WALogger").ERROR(
          S ||
            (S = babelHelpers.taggedTemplateLiteralLoose([
              "error:debug:dfsMockCtwaPayload: please open any 1:1 chat you would like to mock by clicking on it in the chat list. Or provide a chatId to the method.",
            ])),
        );
        return;
      }
      var l = new (o("WAWebConversionTupleModel").ConversionTuple)({
        id: a,
        timestamp: o("WATimeUtils").unixTime(),
        conversionSource: "FB_Ads",
        conversionData: o("WAArrayBufferUtils").stringToArrayBuffer(i),
        ctwaSignals: e.ctwaSignals,
        fromMe: e.fromMe,
      });
      try {
        (r("WAWebConversionTupleCollection").remove(a),
          r("WAWebConversionTupleCollection").add(l, { merge: !0 }),
          o("WALogger").LOG(
            R ||
              (R = babelHelpers.taggedTemplateLiteralLoose([
                'debug:dfsMockCtwaPayload: Mocked CTWA payload for chat "',
                '" with value of "',
                '" (fromMe=',
                ") successfully",
              ])),
            a,
            i,
            String(e.fromMe),
          ));
      } catch (e) {
        o("WALogger").ERROR(
          L ||
            (L = babelHelpers.taggedTemplateLiteralLoose([
              "error:debug:dfsMockCtwaPayload: Error adding CTWA payload to chat ",
              "",
            ])),
          a,
        );
      }
    }
    var pe = function (t) {
      me({
        chatId: t == null ? void 0 : t.chatId,
        payload: t == null ? void 0 : t.payload,
        ctwaSignals: t == null ? void 0 : t.ctwaSignals,
        fromMe: !1,
      });
    };
    ((pe.doc =
      "DFS - Mocks an INBOUND CTWA payload (fromMe=false) \u2014 customer-replied-to-our-ad scenario."),
      (pe.paramsToExecute = []));
    var _e = function (t) {
      var e,
        n =
          (t == null ? void 0 : t.chatId) || ((e = te) == null ? void 0 : e.id);
      if (n == null) {
        o("WALogger").ERROR(
          E ||
            (E = babelHelpers.taggedTemplateLiteralLoose([
              "error:debug:dfsMockReceived3pdagCtwaThread: please open any 1:1 chat you would like to mock by clicking on it in the chat list. Or provide a chatId to the method.",
            ])),
        );
        return;
      }
      var a = new (o("WAWebConversionTupleModel").ConversionTuple)({
        id: n,
        timestamp: o("WATimeUtils").unixTime(),
        conversionSource: "FB_Ads",
        ctwaSignals: "3pdag,3pdag",
        fromMe: !1,
      });
      try {
        (r("WAWebConversionTupleCollection").remove(n),
          r("WAWebConversionTupleCollection").add(a),
          o("WALogger").LOG(
            k ||
              (k = babelHelpers.taggedTemplateLiteralLoose([
                'debug:dfsMockReceived3pdagCtwaThread: Mocked inbound 3pdag CTWA thread (null payload) for chat "',
                '" successfully.',
              ])),
            n,
          ));
      } catch (e) {
        o("WALogger").ERROR(
          I ||
            (I = babelHelpers.taggedTemplateLiteralLoose([
              "error:debug:dfsMockReceived3pdagCtwaThread: Error adding 3pdag CTWA thread to chat ",
              "",
            ])),
          n,
        );
      }
    };
    ((_e.doc =
      'DFS - Mocks an INBOUND 3pdag (EPD) CTWA thread: FB_Ads source, ctwaSignals="3pdag,3pdag", null encrypted payload (fromMe=false). Simulates an ePD-customer thread.'),
      (_e.paramsToExecute = []));
    var fe = function (t) {
      me({
        chatId: t == null ? void 0 : t.chatId,
        payload: t == null ? void 0 : t.payload,
        ctwaSignals: t == null ? void 0 : t.ctwaSignals,
        fromMe: !0,
      });
    };
    ((fe.doc =
      "DFS - Mocks an OUTBOUND CTWA payload (fromMe=true) \u2014 this business clicked another business's ad scenario."),
      (fe.paramsToExecute = []));
    var ge = function (t) {
      var e,
        n = t || ((e = te) == null ? void 0 : e.id);
      n === "all"
        ? (r("WAWebConversionTupleCollection").delete(),
          o("WALogger").LOG(
            T ||
              (T = babelHelpers.taggedTemplateLiteralLoose([
                "debug:dfsUnmockCtwaPayloadForCurrentChatOrChatId: Mocked CTWA payload for all chats successfully",
              ])),
          ))
        : n != null
          ? (r("WAWebConversionTupleCollection").remove(n),
            o("WALogger").LOG(
              D ||
                (D = babelHelpers.taggedTemplateLiteralLoose([
                  "debug:dfsUnmockCtwaPayloadForCurrentChatOrChatId: Removed CTWA payload for chat ",
                  " successfully",
                ])),
              n,
            ))
          : o("WALogger").ERROR(
              x ||
                (x = babelHelpers.taggedTemplateLiteralLoose([
                  "error:debug:dfsMockCtwaPayloadForCurrentChatOrChatId: please open any 1:1 chat you would like to mock by clicking on it in the chat list. Or provide a chatId to the method. Or provide 'all' to remove CTWA payload for all chats.",
                ])),
            );
    };
    ((ge.doc =
      "DFS - Removes CTWA payload from the current chat, or all chats if chatId is not provided. Will be used in bug bashes"),
      (ge.paramsToExecute = []));
    var he = function () {
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").KEYS.CTWA_DATA_SHARING_UPSELL_ACTIVE,
        null,
      );
    };
    ((he.doc =
      "DFS - Resets value of the flag used to control whether to show Data sharing Upsell on the first order creation if OptIn was cancelled"),
      (he.paramsToExecute = []));
    var ye = function (t) {
      if (t) {
        var e;
        ((e = r("WAWebConversionTupleCollection").get(t)) == null || e.delete(),
          o(
            "WAWebConsumerTransparencyInfoIconModel",
          ).ConsumerTransparencyInfoIconModel.chatIds.delete(t.toString()),
          r("WAWebUserPrefsStore").setUser(
            o("WAWebUserPrefsKeys").KEYS.CTWA_CONSUMER_TRANSPARENCY_INFO_ICON,
            Array.from(
              o("WAWebConsumerTransparencyInfoIconModel")
                .ConsumerTransparencyInfoIconModel.chatIds,
            ),
          ));
      } else
        (r("WAWebConversionTupleCollection").delete(),
          (o(
            "WAWebConsumerTransparencyInfoIconModel",
          ).ConsumerTransparencyInfoIconModel.chatIds = new Set()),
          r("WAWebUserPrefsStore").setUser(
            o("WAWebUserPrefsKeys").KEYS.CTWA_CONSUMER_TRANSPARENCY_INFO_ICON,
            [],
          ));
    };
    ((ye.doc =
      "DFS - Resets Consumer Transparency Icon. If no chat id provided clears all conversion tuples and permanent storage for icon markers"),
      (ye.paramsToExecute = []));
    var Ce = function (t) {
      var e,
        n = t || ((e = te) == null ? void 0 : e.id);
      if (n == null) {
        o("WALogger").ERROR(
          $ ||
            ($ = babelHelpers.taggedTemplateLiteralLoose([
              "error:debug:dfsConsumerIconMockForChat: chatId is not provided",
            ])),
        );
        return;
      }
      o(
        "WAWebConsumerTransparencyInfoIconModel",
      ).ConsumerTransparencyInfoIconModel.add(n);
      var a = Array.from(
        o("WAWebConsumerTransparencyInfoIconModel")
          .ConsumerTransparencyInfoIconModel.chatIds,
      );
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.CTWA_CONSUMER_TRANSPARENCY_INFO_ICON,
        a,
      );
    };
    ((Ce.doc =
      "DFS - adds chatId to the perm storage. This will be used by l10n team. They do not need e2e, just to see the consumer dialog"),
      (Ce.paramsToExecute = []));
    var be = function () {
      var e = o(
        "WAWebCommonCTWAConsumerTransparency",
      ).shouldShowROWConsumerDisclosure();
    };
    ((be.doc =
      "DFS - checks if the updated consumer UI should be shown. This will be used by testers and bug bashers"),
      (be.paramsToExecute = []));
    var ve = (function () {
      var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
        var t,
          n = e || ((t = te) == null ? void 0 : t.id);
        if (n != null) {
          var a = new Map([]);
          if (n === "all")
            o("WAWebChatCollection").ChatCollection.forEach(function (e) {
              var t, n;
              if (
                ((t = (n = e.labels) == null ? void 0 : n.length) != null
                  ? t
                  : 0) > 0
              ) {
                var r;
                a.set(e.id.toString(), (r = e.labels) != null ? r : []);
              }
            });
          else {
            var i;
            a.set(
              n.toString(),
              (i = r("nullthrows")(
                o("WAWebChatCollection").ChatCollection.get(n),
              ).labels) != null
                ? i
                : [],
            );
          }
          try {
            a.forEach(function (e, t) {
              var n = r("nullthrows")(
                  o("WAWebChatCollection").ChatCollection.get(t),
                ),
                a = e.map(function (e) {
                  return { id: e, type: "remove" };
                });
              o("WAWebLabelCollection").LabelCollection.addOrRemoveLabels(a, [
                n,
              ]);
            });
          } catch (e) {}
        }
      });
      return function (n) {
        return e.apply(this, arguments);
      };
    })();
    ((ve.doc =
      "Lists - util to unapply all labels from a given chat, the current chat, or from all chats."),
      (ve.paramsToExecute = []));
    var Se = function () {
      var e = o("WAWebUserPrefsGeneral").getDetectedOutcomeOnboardingStatus(),
        t = e == null ? !0 : !e;
      (o("WAWebUserPrefsGeneral").setDetectedOutcomeOnboardingStatus(t),
        o("WALogger").LOG(
          P ||
            (P = babelHelpers.taggedTemplateLiteralLoose([
              "debug:dfsFlipCTWADetectedOutcomeOptIn: Flipped isOptedIn from ",
              " to ",
              "",
            ])),
          String(e),
          String(t),
        ));
    };
    ((Se.doc =
      "DFS - Flips the isOptedIn value of WAWebCTWADetectedOutcomeModel. If null, sets to true."),
      (Se.paramsToExecute = []));
    var Re = function () {
      o("WALogger").LOG(
        N ||
          (N = babelHelpers.taggedTemplateLiteralLoose([
            "debug: Current Detected Outcome onboarding status is: ",
            "",
          ])),
        String(o("WAWebUserPrefsGeneral").getDetectedOutcomeOnboardingStatus()),
      );
    };
    ((Re.doc = "DFS - Display the value of WAWebCTWADetectedOutcomeModel."),
      (Re.paramsToExecute = []));
    var Le = function () {
      (o("WAWebUserPrefsGeneral").setCTWADataSharingDisclosureShownCount(0),
        o("WALogger").LOG(
          M ||
            (M = babelHelpers.taggedTemplateLiteralLoose([
              "debug: Reset CTWA Data Sharing Disclosure Shown Count to 0",
            ])),
        ));
    };
    ((Le.doc =
      "DFS - Reset the CTWA Data Sharing Disclosure Shown Count to 0. This allows opted-out users to see the disclosure again."),
      (Le.paramsToExecute = []));
    var Ee = function (t) {
      (o("WAWebUserPrefsGeneral").setCTWADataSharingDisclosureShownCount(t),
        o("WALogger").LOG(
          w ||
            (w = babelHelpers.taggedTemplateLiteralLoose([
              "debug: Set CTWA Data Sharing Disclosure Shown Count to ",
              "",
            ])),
          String(t),
        ));
    };
    ((Ee.doc =
      "DFS - Set the CTWA Data Sharing Disclosure Shown Count to a specific value."),
      (Ee.paramsToExecute = [0]));
    var ke = function () {
      o("WALogger").LOG(
        A ||
          (A = babelHelpers.taggedTemplateLiteralLoose([
            "debug: CTWADataSharingDisclosure - Total Views: ",
            "",
          ])),
        String(
          o("WAWebUserPrefsGeneral").getCTWADataSharingDisclosureShownCount(),
        ),
      );
    };
    ((ke.doc =
      "DFS - Log the current CTWA Data Sharing Disclosure Shown Count to the console."),
      (ke.paramsToExecute = []));
    var Ie = function () {
      (o("WAWebUserPrefsGeneral").setCTWADataSharingOptOutDisclosureShownCount(
        0,
      ),
        o("WALogger").LOG(
          F ||
            (F = babelHelpers.taggedTemplateLiteralLoose([
              "debug: Reset CTWA Opt-Out Disclosure Shown Count to 0",
            ])),
        ));
    };
    ((Ie.doc =
      "DFS - Reset the CTWA Opt-Out Disclosure Shown Count to 0. This allows opted-out users who have dismissed the disclosure more than two times to see it again."),
      (Ie.paramsToExecute = []));
    var Te = function () {
      o("WALogger").LOG(
        O ||
          (O = babelHelpers.taggedTemplateLiteralLoose([
            "debug: CTWAOptOutDisclosure - Total Views: ",
            "",
          ])),
        String(
          o(
            "WAWebUserPrefsGeneral",
          ).getCTWADataSharingOptOutDisclosureShownCount(),
        ),
      );
    };
    ((Te.doc =
      "DFS - Log the current CTWA Opt-Out Disclosure Shown Count to the console."),
      (Te.paramsToExecute = []));
    var De = function () {
      o("WALogger").LOG(
        B ||
          (B = babelHelpers.taggedTemplateLiteralLoose([
            "debug: CTWAMessageReceived: ",
            "",
          ])),
        String(o("WAWebUserPrefsGeneral").getCTWAMessageReceived()),
      );
    };
    ((De.doc =
      'DFS - Log the current CTWA-message-received flag. This flag gates the "Your customers\' activity" settings row.'),
      (De.paramsToExecute = []));
    var xe = function () {
      (o("WAWebUserPrefsGeneral").setCTWAMessageReceived(!1),
        o("WALogger").LOG(
          W ||
            (W = babelHelpers.taggedTemplateLiteralLoose([
              "debug: Reset CTWAMessageReceived to false",
            ])),
        ));
    };
    ((xe.doc =
      'DFS - Reset the CTWA-message-received flag to false, so the "Your customers\' activity" settings row is hidden again until the next CTWA message is received.'),
      (xe.paramsToExecute = []));
    var $e = (function () {
      var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
        try {
          var n = o("WAWebContactSystemMsg").genNotificationMsg(e, {
            type: "notification_template",
            kind: o("WAWebMsgType").MsgKind.NotificationTemplate,
            subtype: "biz_automatically_labeled_chat_system_message",
            templateParams: [t],
          });
          yield o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
            chatId: e,
            newMsg: n,
            handleSingleMsgOrigin: "createChat",
            preserveOrder: !1,
          });
        } catch (e) {
          o("WALogger").ERROR(
            q ||
              (q = babelHelpers.taggedTemplateLiteralLoose([
                "error:debug:dfsRenderDetectedOutcomeSystemMessage",
              ])),
          );
        }
      });
      return function (n, r) {
        return e.apply(this, arguments);
      };
    })();
    (($e.doc =
      "DFS - Creates and renders a system message of type biz_automatically_labeled_chat_system_message in the current chat."),
      ($e.paramsToExecute = []));
    var Pe = (function () {
      var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        var e = new Date();
        try {
          (yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
            o("WAWebIndividualNewChatMessageCappingLimitUtils")
              .NEW_CHAT_MESSAGE_CAPPING_IDB_KEY,
            {
              capping_status: o("WAWebUserPrefsTypes")
                .NewChatMessageCappingStatusType.CAPPED,
              total_quota: 100,
              used_quota: 100,
              cycle_end_timestamp: Math.floor(
                new Date(e.getFullYear(), e.getMonth() + 1, 0).getTime() / 1e3,
              ),
              cycle_start_timestamp: Math.floor(
                new Date(e.getFullYear(), e.getMonth(), 0).getTime() / 1e3,
              ),
              mv_status: o("WAWebUserPrefsTypes")
                .NewChatMessageCappingMVStatusType.NOT_ACTIVE,
              ote_status: o("WAWebUserPrefsTypes")
                .NewChatMessageCappingOTEStatusType.ELIGIBLE,
              server_sent_timestamp: Date.now() / 1e3,
            },
          ),
            o("WAWebCmd").Cmd.newChatMessageCappingStateChange());
        } catch (e) {
          o("WALogger").ERROR(
            U ||
              (U = babelHelpers.taggedTemplateLiteralLoose([
                "error:debug:dfsSetNewMessageCappedStatus",
              ])),
          );
        }
        o("WALogger").LOG(
          V ||
            (V = babelHelpers.taggedTemplateLiteralLoose([
              "debug: Set New Message Capped Status",
            ])),
        );
      });
      return function () {
        return e.apply(this, arguments);
      };
    })();
    ((Pe.doc = "DFS - Set New Message Capped Status"),
      (Pe.paramsToExecute = []));
    var Ne = (function () {
      var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        var e = new Date();
        try {
          (yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
            o("WAWebIndividualNewChatMessageCappingLimitUtils")
              .NEW_CHAT_MESSAGE_CAPPING_IDB_KEY,
            {
              capping_status: o("WAWebUserPrefsTypes")
                .NewChatMessageCappingStatusType.NONE,
              total_quota: 100,
              used_quota: 0,
              cycle_end_timestamp: Math.floor(
                new Date(e.getFullYear(), e.getMonth() + 1, 0).getTime() / 1e3,
              ),
              cycle_start_timestamp: Math.floor(
                new Date(e.getFullYear(), e.getMonth(), 0).getTime() / 1e3,
              ),
              mv_status: o("WAWebUserPrefsTypes")
                .NewChatMessageCappingMVStatusType.NOT_ACTIVE,
              ote_status: o("WAWebUserPrefsTypes")
                .NewChatMessageCappingOTEStatusType.NOT_ELIGIBLE,
              server_sent_timestamp: Date.now() / 1e3,
            },
          ),
            o("WAWebCmd").Cmd.newChatMessageCappingStateChange());
        } catch (e) {
          o("WALogger").ERROR(
            H ||
              (H = babelHelpers.taggedTemplateLiteralLoose([
                "error:debug:dfsResetNewMessageCappedStatus",
              ])),
          );
        }
        o("WALogger").LOG(
          G ||
            (G = babelHelpers.taggedTemplateLiteralLoose([
              "debug: Reset New Message Capped Status",
            ])),
        );
      });
      return function () {
        return e.apply(this, arguments);
      };
    })();
    ((Ne.doc = "DFS - Reset New Message Capped Status"),
      (Ne.paramsToExecute = []));
    var Me = (function () {
      var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        var e = new Date();
        try {
          (yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
            o("WAWebIndividualNewChatMessageCappingLimitUtils")
              .NEW_CHAT_MESSAGE_CAPPING_IDB_KEY,
            {
              capping_status: o("WAWebUserPrefsTypes")
                .NewChatMessageCappingStatusType.FIRST_WARNING,
              total_quota: 100,
              used_quota: o("WAWebMobilePlatforms").isSMB() ? 50 : 75,
              cycle_end_timestamp: Math.floor(
                new Date(e.getFullYear(), e.getMonth() + 1, 0).getTime() / 1e3,
              ),
              cycle_start_timestamp: Math.floor(
                new Date(e.getFullYear(), e.getMonth(), 1).getTime() / 1e3,
              ),
              mv_status: o("WAWebUserPrefsTypes")
                .NewChatMessageCappingMVStatusType.NOT_ACTIVE,
              ote_status: o("WAWebUserPrefsTypes")
                .NewChatMessageCappingOTEStatusType.ELIGIBLE,
              server_sent_timestamp: Date.now() / 1e3,
            },
          ),
            o("WAWebCmd").Cmd.newChatMessageCappingStateChange(),
            o("WALogger").LOG(
              z ||
                (z = babelHelpers.taggedTemplateLiteralLoose([
                  "debug: Set First Warning Status",
                ])),
            ));
        } catch (e) {
          o("WALogger").ERROR(
            j ||
              (j = babelHelpers.taggedTemplateLiteralLoose([
                "error:debug:dfsSetFirstWarningStatus",
              ])),
          );
        }
      });
      return function () {
        return e.apply(this, arguments);
      };
    })();
    ((Me.doc = "DFS - Set New Message Capping First Warning Status"),
      (Me.paramsToExecute = []));
    var we = (function () {
      var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        var e = new Date();
        try {
          (yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
            o("WAWebIndividualNewChatMessageCappingLimitUtils")
              .NEW_CHAT_MESSAGE_CAPPING_IDB_KEY,
            {
              capping_status: o("WAWebUserPrefsTypes")
                .NewChatMessageCappingStatusType.SECOND_WARNING,
              total_quota: 100,
              used_quota: o("WAWebMobilePlatforms").isSMB() ? 75 : 90,
              cycle_end_timestamp: Math.floor(
                new Date(e.getFullYear(), e.getMonth() + 1, 0).getTime() / 1e3,
              ),
              cycle_start_timestamp: Math.floor(
                new Date(e.getFullYear(), e.getMonth(), 1).getTime() / 1e3,
              ),
              mv_status: o("WAWebUserPrefsTypes")
                .NewChatMessageCappingMVStatusType.NOT_ACTIVE,
              ote_status: o("WAWebUserPrefsTypes")
                .NewChatMessageCappingOTEStatusType.ELIGIBLE,
              server_sent_timestamp: Date.now() / 1e3,
            },
          ),
            o("WAWebCmd").Cmd.newChatMessageCappingStateChange(),
            o("WALogger").LOG(
              K ||
                (K = babelHelpers.taggedTemplateLiteralLoose([
                  "debug: Set Second Warning Status",
                ])),
            ));
        } catch (e) {
          o("WALogger").ERROR(
            Q ||
              (Q = babelHelpers.taggedTemplateLiteralLoose([
                "error:debug:dfsSetSecondWarningStatus",
              ])),
          );
        }
      });
      return function () {
        return e.apply(this, arguments);
      };
    })();
    ((we.doc = "DFS - Set New Message Capping Second Warning Status"),
      (we.paramsToExecute = []));
    var Ae = (function () {
      var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        try {
          (yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.remove(
            o("WAWebIndividualNewChatMessageCappingLimitUtils")
              .NEW_CHAT_MESSAGE_CAPPING_IDB_KEY,
          ),
            o("WAWebCmd").Cmd.newChatMessageCappingStateChange());
        } catch (e) {
          o("WALogger").ERROR(
            X ||
              (X = babelHelpers.taggedTemplateLiteralLoose([
                "error:debug:dfsClearNewMessageCappedData",
              ])),
          );
        }
        o("WALogger").LOG(
          Y ||
            (Y = babelHelpers.taggedTemplateLiteralLoose([
              "debug: Clear New Message Capped Data",
            ])),
        );
      });
      return function () {
        return e.apply(this, arguments);
      };
    })();
    ((Ae.doc = "DFS - Clear New Message Capped data"),
      (Ae.paramsToExecute = []));
    var Fe = (function () {
      var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        var e = new Date();
        try {
          (yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
            o("WAWebIndividualNewChatMessageCappingLimitUtils")
              .NEW_CHAT_MESSAGE_CAPPING_IDB_KEY,
            {
              capping_status: o("WAWebUserPrefsTypes")
                .NewChatMessageCappingStatusType.CAPPED,
              total_quota: 100,
              used_quota: 100,
              cycle_end_timestamp: Math.floor(
                new Date(e.getFullYear(), e.getMonth() + 1, 0).getTime() / 1e3,
              ),
              cycle_start_timestamp: Math.floor(
                new Date(e.getFullYear(), e.getMonth(), 0).getTime() / 1e3,
              ),
              mv_status: o("WAWebUserPrefsTypes")
                .NewChatMessageCappingMVStatusType.NOT_ACTIVE,
              ote_status: o("WAWebUserPrefsTypes")
                .NewChatMessageCappingOTEStatusType.ELIGIBLE,
              server_sent_timestamp: Date.now() / 1e3,
            },
          ),
            o("WAWebCmd").Cmd.newChatMessageCappingStateChange());
        } catch (e) {
          o("WALogger").ERROR(
            J ||
              (J = babelHelpers.taggedTemplateLiteralLoose([
                "error:debug:dfsSetCappedWithOTEEligible",
              ])),
          );
        }
        o("WALogger").LOG(
          Z ||
            (Z = babelHelpers.taggedTemplateLiteralLoose([
              "debug: Set Capped With OTE Eligible",
            ])),
        );
      });
      return function () {
        return e.apply(this, arguments);
      };
    })();
    ((Fe.doc = "DFS - Set capping status to CAPPED with OTE ELIGIBLE"),
      (Fe.paramsToExecute = []));
    var Oe = (function () {
      var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
        try {
          var t = o("WAWebContactSystemMsg").genNotificationMsg(e, {
            type: "notification_template",
            kind: o("WAWebMsgType").MsgKind.NotificationTemplate,
            subtype: "ctwa_consumer_data_sharing_disclosure_system_message",
            templateParams: [],
          });
          yield o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
            chatId: e,
            newMsg: t,
            handleSingleMsgOrigin: "createChat",
            preserveOrder: !1,
          });
        } catch (e) {
          o("WALogger").ERROR(
            ee ||
              (ee = babelHelpers.taggedTemplateLiteralLoose([
                "error:debug:dfsRenderConsumerDataDisclosureSystemMessage",
              ])),
          );
        }
      });
      return function (n) {
        return e.apply(this, arguments);
      };
    })();
    ((Oe.doc =
      "DFS - Creates and renders a system message of type ctwa_consumer_data_disclosure in the current chat."),
      (Oe.paramsToExecute = []));
    var Be = {
      dfsSmbSettingReset: re,
      dfsSmbSettingServerSet: oe,
      dfsSmbSettingResetLocal: ae,
      dfsSmbSettingOptInLocal: ie,
      dfsSmbSettingOptOutLocal: le,
      dfsSmbSettingServerFetch: ue,
      dfsSmbSettingLocalFetch: ce,
      dfsResetV2DisclosureSeen: se,
      dfsSmbUpsellReset: he,
      dfsMockCtwaPayloadForCurrentChatOrChatId: de,
      dfsMockReceivedCtwaPayloadForCurrentChatOrChatId: pe,
      dfsMockReceived3pdagCtwaThreadForCurrentChatOrChatId: _e,
      dfsMockSentCtwaPayloadForCurrentChatOrChatId: fe,
      dfsUnmockCtwaPayloadForCurrentChatOrChatId: ge,
      dfsConsumerIconReset: ye,
      dfsConsumerMockInfoIconForCurrentChatOrChatId: Ce,
      dfsSmbSettingModel: o("WAWebCTWADataSharingModel").CTWADataSharingModel,
      dfsSmbCoolOffModel: o("WAWebDataSharingOptInCoolOffModel")
        .DataSharingOptInCoolOffModel,
      dfsSmbUpsellModel: {
        enableUpsell: o("WAWebDataSharingUpsellModel").enableUpsell,
        isUpsellEnabled: o("WAWebDataSharingUpsellModel").isUpsellEnabled,
      },
      dfsConsumerInfoIconModel: o("WAWebConsumerTransparencyInfoIconModel")
        .ConsumerTransparencyInfoIconModel,
      dfsInitialize: ne,
      dfsShouldShowROWConsumerDisclosure: be,
      dfsFlipCTWADetectedOutcomeOptIn: Se,
      dfsDisplayCTWADetectedOutcomeOnboardingStatus: Re,
      dfsResetCTWADataSharingDisclosureShownCount: Le,
      dfsSetCTWADataSharingDisclosureShownCount: Ee,
      dfsDisplayCTWADataSharingDisclosureShownCount: ke,
      dfsResetCTWADataSharingOptOutDisclosureShownCount: Ie,
      dfsDisplayCTWADataSharingOptOutDisclosureShownCount: Te,
      dfsDisplayCTWAMessageReceived: De,
      dfsResetCTWAMessageReceived: xe,
      dfsRenderDetectedOutcomeSystemMessage: $e,
      labelsUnassignAllLabelsFromChat: ve,
      dfsSetNewMessageCappedStatus: Pe,
      dfsSetFirstWarningStatus: Me,
      dfsSetSecondWarningStatus: we,
      dfsResetNewMessageCappedStatus: Ne,
      dfsClearNewMessageCappedData: Ae,
      dfsSetCappedWithOTEEligible: Fe,
      dfsRenderConsumerDataDisclosureSystemMessage: Oe,
    };
    l.default = Be;
  },
  98,
);
