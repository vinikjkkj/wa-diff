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
    "WAWebCoexCanonicalStateQuery",
    "WAWebCoexProductStateStore",
    "WAWebCoexStateSyncCoordinator",
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
      te,
      ne,
      re,
      oe;
    function ae() {
      o("WAWebCmd").Cmd.on("open_chat", function (e) {
        var t = e.chat;
        oe = t;
      });
    }
    var ie = (function () {
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
    ((ie.doc =
      'DFS - resets SMB Data Sharing setting on the server. Sets the value to "notset" (optional version)'),
      (ie.paramsToExecute = []));
    var le = (function () {
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
    ((le.doc =
      'DFS - Sets the SMB Data Sharing setting on the server to a given value ("true"/"false"/"notset") and optional disclosure version'),
      (le.paramsToExecute = [
        o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true,
        2,
      ]));
    var se = function (t) {
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
    ((se.doc =
      "DFS - resets SMB Data Sharing setting locally (client-only, no server RPC; optional version)"),
      (se.paramsToExecute = []));
    var ue = function (t) {
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
    ((ue.doc =
      "DFS - sets SMB Data Sharing setting to true locally (client-only, no server RPC; optional version)"),
      (ue.paramsToExecute = []));
    var ce = function (t) {
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
    ((ce.doc =
      "DFS - sets SMB Data Sharing setting to false locally (client-only, no server RPC; optional version)"),
      (ce.paramsToExecute = []));
    var de = function () {
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
    ((de.doc =
      'DFS - Resets the "v2 disclosure seen" flag so the v2 (ePD) disclosure is treated as not-yet-seen and can be shown again.'),
      (de.paramsToExecute = []));
    var me = (function () {
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
    ((me.doc =
      "DFS - Fetches the SMB Data Sharing setting (value + disclosure version) from the server"),
      (me.paramsToExecute = []));
    var pe = function () {
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
    ((pe.doc =
      "DFS - Reads the SMB Data Sharing setting (value + disclosure version) from the local client model (no server RPC)"),
      (pe.paramsToExecute = []));
    var _e = function (t) {
      var e,
        n,
        a =
          (t == null ? void 0 : t.chatId) || ((e = oe) == null ? void 0 : e.id),
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
    ((_e.doc =
      "DFS - Adds CTWA payload to current chat. This will be used by the l10n team and in bug bashes."),
      (_e.paramsToExecute = []));
    function fe(e) {
      var t,
        n,
        a = e.chatId || ((t = oe) == null ? void 0 : t.id),
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
    var ge = function (t) {
      fe({
        chatId: t == null ? void 0 : t.chatId,
        payload: t == null ? void 0 : t.payload,
        ctwaSignals: t == null ? void 0 : t.ctwaSignals,
        fromMe: !1,
      });
    };
    ((ge.doc =
      "DFS - Mocks an INBOUND CTWA payload (fromMe=false) \u2014 customer-replied-to-our-ad scenario."),
      (ge.paramsToExecute = []));
    var he = function (t) {
      var e,
        n,
        a =
          (t == null ? void 0 : t.chatId) || ((e = oe) == null ? void 0 : e.id);
      if (a == null) {
        o("WALogger").ERROR(
          E ||
            (E = babelHelpers.taggedTemplateLiteralLoose([
              "error:debug:dfsMockReceived3pdagCtwaThread: please open any 1:1 chat you would like to mock by clicking on it in the chat list. Or provide a chatId to the method.",
            ])),
        );
        return;
      }
      var i = new (o("WAWebConversionTupleModel").ConversionTuple)({
        id: a,
        timestamp: o("WATimeUtils").unixTime(),
        conversionSource: "FB_Ads",
        ctwaSignals: "3pdag,3pdag",
        sourceId:
          (n = t == null ? void 0 : t.sourceId) != null
            ? n
            : "mock_3pdag_ad_id",
        fromMe: !1,
      });
      try {
        (r("WAWebConversionTupleCollection").remove(a),
          r("WAWebConversionTupleCollection").add(i),
          o("WALogger").LOG(
            k ||
              (k = babelHelpers.taggedTemplateLiteralLoose([
                'debug:dfsMockReceived3pdagCtwaThread: Mocked inbound 3pdag CTWA thread (null payload) for chat "',
                '" successfully.',
              ])),
            a,
          ));
      } catch (e) {
        o("WALogger").ERROR(
          I ||
            (I = babelHelpers.taggedTemplateLiteralLoose([
              "error:debug:dfsMockReceived3pdagCtwaThread: Error adding 3pdag CTWA thread to chat ",
              "",
            ])),
          a,
        );
      }
    };
    ((he.doc =
      'DFS - Mocks an INBOUND 3pdag (EPD) CTWA thread: FB_Ads source, ctwaSignals="3pdag,3pdag", null encrypted payload, seeded ad id (fromMe=false). Simulates an ePD-customer thread.'),
      (he.paramsToExecute = []));
    var ye = function (t) {
      fe({
        chatId: t == null ? void 0 : t.chatId,
        payload: t == null ? void 0 : t.payload,
        ctwaSignals: t == null ? void 0 : t.ctwaSignals,
        fromMe: !0,
      });
    };
    ((ye.doc =
      "DFS - Mocks an OUTBOUND CTWA payload (fromMe=true) \u2014 this business clicked another business's ad scenario."),
      (ye.paramsToExecute = []));
    var Ce = function (t) {
      var e,
        n = t || ((e = oe) == null ? void 0 : e.id);
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
    ((Ce.doc =
      "DFS - Removes CTWA payload from the current chat, or all chats if chatId is not provided. Will be used in bug bashes"),
      (Ce.paramsToExecute = []));
    var be = function () {
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").KEYS.CTWA_DATA_SHARING_UPSELL_ACTIVE,
        null,
      );
    };
    ((be.doc =
      "DFS - Resets value of the flag used to control whether to show Data sharing Upsell on the first order creation if OptIn was cancelled"),
      (be.paramsToExecute = []));
    var ve = function (t) {
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
    ((ve.doc =
      "DFS - Resets Consumer Transparency Icon. If no chat id provided clears all conversion tuples and permanent storage for icon markers"),
      (ve.paramsToExecute = []));
    var Se = function (t) {
      var e,
        n = t || ((e = oe) == null ? void 0 : e.id);
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
    ((Se.doc =
      "DFS - adds chatId to the perm storage. This will be used by l10n team. They do not need e2e, just to see the consumer dialog"),
      (Se.paramsToExecute = []));
    var Re = function () {
      var e = o(
        "WAWebCommonCTWAConsumerTransparency",
      ).shouldShowROWConsumerDisclosure();
    };
    ((Re.doc =
      "DFS - checks if the updated consumer UI should be shown. This will be used by testers and bug bashers"),
      (Re.paramsToExecute = []));
    var Le = (function () {
      var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
        var t,
          n = e || ((t = oe) == null ? void 0 : t.id);
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
    ((Le.doc =
      "Lists - util to unapply all labels from a given chat, the current chat, or from all chats."),
      (Le.paramsToExecute = []));
    var Ee = function () {
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
    ((Ee.doc =
      "DFS - Flips the isOptedIn value of WAWebCTWADetectedOutcomeModel. If null, sets to true."),
      (Ee.paramsToExecute = []));
    var ke = function () {
      var e = o("WAWebUserPrefsGeneral").getDetectedOutcomeOnboardingStatus();
      return (
        o("WALogger").LOG(
          N ||
            (N = babelHelpers.taggedTemplateLiteralLoose([
              "debug: Current Detected Outcome onboarding status is: ",
              "",
            ])),
          String(e),
        ),
        e
      );
    };
    ((ke.doc = "DFS - Display the value of WAWebCTWADetectedOutcomeModel."),
      (ke.paramsToExecute = []));
    var Ie = (function () {
      var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        var e = yield o(
          "WAWebCoexCanonicalStateQuery",
        ).fetchCoexCanonicalMembership();
        return (
          o("WALogger").LOG(
            M ||
              (M = babelHelpers.taggedTemplateLiteralLoose([
                "debug: canonical coex state: ",
                "",
              ])),
            JSON.stringify(e),
          ),
          e
        );
      });
      return function () {
        return e.apply(this, arguments);
      };
    })();
    ((Ie.doc =
      "DFS - Fetch the account's canonical coex product state (product_states from Get BSP Info) and log the validated result without storing it."),
      (Ie.paramsToExecute = []));
    var Te = function () {
      var e = o("WAWebCoexProductStateStore").getCoexProductState();
      return (
        o("WALogger").LOG(
          w ||
            (w = babelHelpers.taggedTemplateLiteralLoose([
              "debug: stored coex product state: ",
              "",
            ])),
          JSON.stringify(e),
        ),
        e
      );
    };
    ((Te.doc =
      "DFS - Show the stored coex product state (WACoexProductState in the IndexedDB user prefs), or null when none is stored."),
      (Te.paramsToExecute = []));
    var De = function () {
      (o("WAWebCoexProductStateStore").clearCoexProductState(),
        o("WALogger").LOG(
          A ||
            (A = babelHelpers.taggedTemplateLiteralLoose([
              "debug: cleared the stored coex product state",
            ])),
        ));
    };
    ((De.doc =
      "DFS - Clear the stored coex product state (WACoexProductState in the IndexedDB user prefs)."),
      (De.paramsToExecute = []));
    var xe = (function () {
      var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        return (
          yield o("WAWebCoexStateSyncCoordinator").requestCoexStateRefresh(
            "debug",
          ),
          Te()
        );
      });
      return function () {
        return e.apply(this, arguments);
      };
    })();
    ((xe.doc =
      "DFS - Pull the canonical coex product state through the refresh coordinator, store it when the snapshot is valid, then show the stored copy."),
      (xe.paramsToExecute = []));
    var $e = function () {
      (o("WAWebUserPrefsGeneral").setCTWADataSharingDisclosureShownCount(0),
        o("WALogger").LOG(
          F ||
            (F = babelHelpers.taggedTemplateLiteralLoose([
              "debug: Reset CTWA Data Sharing Disclosure Shown Count to 0",
            ])),
        ));
    };
    (($e.doc =
      "DFS - Reset the CTWA Data Sharing Disclosure Shown Count to 0. This allows opted-out users to see the disclosure again."),
      ($e.paramsToExecute = []));
    var Pe = function (t) {
      (o("WAWebUserPrefsGeneral").setCTWADataSharingDisclosureShownCount(t),
        o("WALogger").LOG(
          O ||
            (O = babelHelpers.taggedTemplateLiteralLoose([
              "debug: Set CTWA Data Sharing Disclosure Shown Count to ",
              "",
            ])),
          String(t),
        ));
    };
    ((Pe.doc =
      "DFS - Set the CTWA Data Sharing Disclosure Shown Count to a specific value."),
      (Pe.paramsToExecute = [0]));
    var Ne = function () {
      o("WALogger").LOG(
        B ||
          (B = babelHelpers.taggedTemplateLiteralLoose([
            "debug: CTWADataSharingDisclosure - Total Views: ",
            "",
          ])),
        String(
          o("WAWebUserPrefsGeneral").getCTWADataSharingDisclosureShownCount(),
        ),
      );
    };
    ((Ne.doc =
      "DFS - Log the current CTWA Data Sharing Disclosure Shown Count to the console."),
      (Ne.paramsToExecute = []));
    var Me = function () {
      (o("WAWebUserPrefsGeneral").setCTWADataSharingOptOutDisclosureShownCount(
        0,
      ),
        o("WALogger").LOG(
          W ||
            (W = babelHelpers.taggedTemplateLiteralLoose([
              "debug: Reset CTWA Opt-Out Disclosure Shown Count to 0",
            ])),
        ));
    };
    ((Me.doc =
      "DFS - Reset the CTWA Opt-Out Disclosure Shown Count to 0. This allows opted-out users who have dismissed the disclosure more than two times to see it again."),
      (Me.paramsToExecute = []));
    var we = function () {
      o("WALogger").LOG(
        q ||
          (q = babelHelpers.taggedTemplateLiteralLoose([
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
    ((we.doc =
      "DFS - Log the current CTWA Opt-Out Disclosure Shown Count to the console."),
      (we.paramsToExecute = []));
    var Ae = function () {
      o("WALogger").LOG(
        U ||
          (U = babelHelpers.taggedTemplateLiteralLoose([
            "debug: CTWAMessageReceived: ",
            "",
          ])),
        String(o("WAWebUserPrefsGeneral").getCTWAMessageReceived()),
      );
    };
    ((Ae.doc =
      'DFS - Log the current CTWA-message-received flag. This flag gates the "Your customers\' activity" settings row.'),
      (Ae.paramsToExecute = []));
    var Fe = function () {
      (o("WAWebUserPrefsGeneral").setCTWAMessageReceived(!1),
        o("WALogger").LOG(
          V ||
            (V = babelHelpers.taggedTemplateLiteralLoose([
              "debug: Reset CTWAMessageReceived to false",
            ])),
        ));
    };
    ((Fe.doc =
      'DFS - Reset the CTWA-message-received flag to false, so the "Your customers\' activity" settings row is hidden again until the next CTWA message is received.'),
      (Fe.paramsToExecute = []));
    var Oe = (function () {
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
            H ||
              (H = babelHelpers.taggedTemplateLiteralLoose([
                "error:debug:dfsRenderDetectedOutcomeSystemMessage",
              ])),
          );
        }
      });
      return function (n, r) {
        return e.apply(this, arguments);
      };
    })();
    ((Oe.doc =
      "DFS - Creates and renders a system message of type biz_automatically_labeled_chat_system_message in the current chat."),
      (Oe.paramsToExecute = []));
    var Be = (function () {
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
            G ||
              (G = babelHelpers.taggedTemplateLiteralLoose([
                "error:debug:dfsSetNewMessageCappedStatus",
              ])),
          );
        }
        o("WALogger").LOG(
          z ||
            (z = babelHelpers.taggedTemplateLiteralLoose([
              "debug: Set New Message Capped Status",
            ])),
        );
      });
      return function () {
        return e.apply(this, arguments);
      };
    })();
    ((Be.doc = "DFS - Set New Message Capped Status"),
      (Be.paramsToExecute = []));
    var We = (function () {
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
            j ||
              (j = babelHelpers.taggedTemplateLiteralLoose([
                "error:debug:dfsResetNewMessageCappedStatus",
              ])),
          );
        }
        o("WALogger").LOG(
          K ||
            (K = babelHelpers.taggedTemplateLiteralLoose([
              "debug: Reset New Message Capped Status",
            ])),
        );
      });
      return function () {
        return e.apply(this, arguments);
      };
    })();
    ((We.doc = "DFS - Reset New Message Capped Status"),
      (We.paramsToExecute = []));
    var qe = (function () {
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
              Q ||
                (Q = babelHelpers.taggedTemplateLiteralLoose([
                  "debug: Set First Warning Status",
                ])),
            ));
        } catch (e) {
          o("WALogger").ERROR(
            X ||
              (X = babelHelpers.taggedTemplateLiteralLoose([
                "error:debug:dfsSetFirstWarningStatus",
              ])),
          );
        }
      });
      return function () {
        return e.apply(this, arguments);
      };
    })();
    ((qe.doc = "DFS - Set New Message Capping First Warning Status"),
      (qe.paramsToExecute = []));
    var Ue = (function () {
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
              Y ||
                (Y = babelHelpers.taggedTemplateLiteralLoose([
                  "debug: Set Second Warning Status",
                ])),
            ));
        } catch (e) {
          o("WALogger").ERROR(
            J ||
              (J = babelHelpers.taggedTemplateLiteralLoose([
                "error:debug:dfsSetSecondWarningStatus",
              ])),
          );
        }
      });
      return function () {
        return e.apply(this, arguments);
      };
    })();
    ((Ue.doc = "DFS - Set New Message Capping Second Warning Status"),
      (Ue.paramsToExecute = []));
    var Ve = (function () {
      var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        try {
          (yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.remove(
            o("WAWebIndividualNewChatMessageCappingLimitUtils")
              .NEW_CHAT_MESSAGE_CAPPING_IDB_KEY,
          ),
            o("WAWebCmd").Cmd.newChatMessageCappingStateChange());
        } catch (e) {
          o("WALogger").ERROR(
            Z ||
              (Z = babelHelpers.taggedTemplateLiteralLoose([
                "error:debug:dfsClearNewMessageCappedData",
              ])),
          );
        }
        o("WALogger").LOG(
          ee ||
            (ee = babelHelpers.taggedTemplateLiteralLoose([
              "debug: Clear New Message Capped Data",
            ])),
        );
      });
      return function () {
        return e.apply(this, arguments);
      };
    })();
    ((Ve.doc = "DFS - Clear New Message Capped data"),
      (Ve.paramsToExecute = []));
    var He = (function () {
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
            te ||
              (te = babelHelpers.taggedTemplateLiteralLoose([
                "error:debug:dfsSetCappedWithOTEEligible",
              ])),
          );
        }
        o("WALogger").LOG(
          ne ||
            (ne = babelHelpers.taggedTemplateLiteralLoose([
              "debug: Set Capped With OTE Eligible",
            ])),
        );
      });
      return function () {
        return e.apply(this, arguments);
      };
    })();
    ((He.doc = "DFS - Set capping status to CAPPED with OTE ELIGIBLE"),
      (He.paramsToExecute = []));
    var Ge = (function () {
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
            re ||
              (re = babelHelpers.taggedTemplateLiteralLoose([
                "error:debug:dfsRenderConsumerDataDisclosureSystemMessage",
              ])),
          );
        }
      });
      return function (n) {
        return e.apply(this, arguments);
      };
    })();
    ((Ge.doc =
      "DFS - Creates and renders a system message of type ctwa_consumer_data_disclosure in the current chat."),
      (Ge.paramsToExecute = []));
    var ze = {
      dfsSmbSettingReset: ie,
      dfsSmbSettingServerSet: le,
      dfsSmbSettingResetLocal: se,
      dfsSmbSettingOptInLocal: ue,
      dfsSmbSettingOptOutLocal: ce,
      dfsSmbSettingServerFetch: me,
      dfsSmbSettingLocalFetch: pe,
      dfsResetV2DisclosureSeen: de,
      dfsSmbUpsellReset: be,
      dfsMockCtwaPayloadForCurrentChatOrChatId: _e,
      dfsMockReceivedCtwaPayloadForCurrentChatOrChatId: ge,
      dfsMockReceived3pdagCtwaThreadForCurrentChatOrChatId: he,
      dfsMockSentCtwaPayloadForCurrentChatOrChatId: ye,
      dfsUnmockCtwaPayloadForCurrentChatOrChatId: Ce,
      dfsConsumerIconReset: ve,
      dfsConsumerMockInfoIconForCurrentChatOrChatId: Se,
      dfsSmbSettingModel: o("WAWebCTWADataSharingModel").CTWADataSharingModel,
      dfsSmbCoolOffModel: o("WAWebDataSharingOptInCoolOffModel")
        .DataSharingOptInCoolOffModel,
      dfsSmbUpsellModel: {
        enableUpsell: o("WAWebDataSharingUpsellModel").enableUpsell,
        isUpsellEnabled: o("WAWebDataSharingUpsellModel").isUpsellEnabled,
      },
      dfsConsumerInfoIconModel: o("WAWebConsumerTransparencyInfoIconModel")
        .ConsumerTransparencyInfoIconModel,
      dfsInitialize: ae,
      dfsShouldShowROWConsumerDisclosure: Re,
      dfsFlipCTWADetectedOutcomeOptIn: Ee,
      dfsDisplayCTWADetectedOutcomeOnboardingStatus: ke,
      dfsFetchCoexCanonicalState: Ie,
      dfsShowCoexProductState: Te,
      dfsClearCoexProductState: De,
      dfsRefreshCoexState: xe,
      dfsResetCTWADataSharingDisclosureShownCount: $e,
      dfsSetCTWADataSharingDisclosureShownCount: Pe,
      dfsDisplayCTWADataSharingDisclosureShownCount: Ne,
      dfsResetCTWADataSharingOptOutDisclosureShownCount: Me,
      dfsDisplayCTWADataSharingOptOutDisclosureShownCount: we,
      dfsDisplayCTWAMessageReceived: Ae,
      dfsResetCTWAMessageReceived: Fe,
      dfsRenderDetectedOutcomeSystemMessage: Oe,
      labelsUnassignAllLabelsFromChat: Le,
      dfsSetNewMessageCappedStatus: Be,
      dfsSetFirstWarningStatus: qe,
      dfsSetSecondWarningStatus: Ue,
      dfsResetNewMessageCappedStatus: We,
      dfsClearNewMessageCappedData: Ve,
      dfsSetCappedWithOTEEligible: He,
      dfsRenderConsumerDataDisclosureSystemMessage: Ge,
    };
    l.default = ze;
  },
  98,
);
