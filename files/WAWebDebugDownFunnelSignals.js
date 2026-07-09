__d(
  "WAWebDebugDownFunnelSignals",
  [
    "WAArrayBufferUtils",
    "WALogger",
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
      z;
    function j() {
      o("WAWebCmd").Cmd.on("open_chat", function (e) {
        var t = e.chat;
        z = t;
      });
    }
    var K = (function () {
      var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        return o("WAWebSMBDataSharingSettingAction")
          .setSMBDataSharingSettingAction(
            o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.notset,
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
      return function () {
        return t.apply(this, arguments);
      };
    })();
    ((K.doc =
      'DFS - resets SMB Data Sharing setting. Sets the value to "notset"'),
      (K.paramsToExecute = []));
    var Q = function () {
      (o("WAWebCTWADataSharingModel").CTWADataSharingModel.setValue(
        o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.notset,
      ),
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              'debug:resetDataSharingToNotsetLocal: local model reset to "notset"',
            ])),
        ));
    };
    ((Q.doc =
      "DFS - resets SMB Data Sharing setting locally (client-only, no server RPC)"),
      (Q.paramsToExecute = []));
    var X = function () {
      (o("WAWebCTWADataSharingModel").CTWADataSharingModel.setValue(
        o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true,
      ),
        o("WALogger").LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              'debug:setDataSharingToOptInLocal: local model set to "true"',
            ])),
        ));
    };
    ((X.doc =
      "DFS - sets SMB Data Sharing setting to true locally (client-only, no server RPC)"),
      (X.paramsToExecute = []));
    var Y = function () {
      (o("WAWebCTWADataSharingModel").CTWADataSharingModel.setValue(
        o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.false,
      ),
        o("WALogger").LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              'debug:setDataSharingToOptOutLocal: local model set to "false"',
            ])),
        ));
    };
    ((Y.doc =
      "DFS - sets SMB Data Sharing setting to false locally (client-only, no server RPC)"),
      (Y.paramsToExecute = []));
    var J = (function () {
      var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        return o("WAWebSMBDataSharingSettingAction")
          .getSMBDataSharingSettingAction()
          .then(function (e) {
            return (
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "debug:dataSharingSettingFetch",
                  ])),
              ),
              e
            );
          })
          .catch(function (e) {
            o("WALogger").ERROR(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "error:debug:dataSharingSettingFetch",
                ])),
            );
          });
      });
      return function () {
        return e.apply(this, arguments);
      };
    })();
    ((J.doc = "DFS - Fetches the SMB Data Sharing setting from the server"),
      (J.paramsToExecute = []));
    var Z = function () {
      var e = o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue();
      return (
        o("WALogger").LOG(
          _ ||
            (_ = babelHelpers.taggedTemplateLiteralLoose([
              "debug:dataSharingSettingLocalFetch",
            ])),
        ),
        e
      );
    };
    ((Z.doc =
      "DFS - Reads the SMB Data Sharing setting from the local client model (no server RPC)"),
      (Z.paramsToExecute = []));
    var ee = function (t) {
      var e,
        n,
        a =
          (t == null ? void 0 : t.chatId) || ((e = z) == null ? void 0 : e.id),
        i = (n = t == null ? void 0 : t.payload) != null ? n : "mock_data";
      if (a == null) {
        o("WALogger").ERROR(
          f ||
            (f = babelHelpers.taggedTemplateLiteralLoose([
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
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                'debug:dfsMockCtwaPayloadForCurrentChatOrChatId: Mocked CTWA payload for chat "',
                '" with value of "',
                '" successfully',
              ])),
            a,
            i,
          ));
      } catch (e) {
        o("WALogger").ERROR(
          h ||
            (h = babelHelpers.taggedTemplateLiteralLoose([
              "error:debug:dfsMockCtwaPayloadForCurrentChatOrChatId: Error adding CTWA payload to chat ",
              "",
            ])),
          a,
        );
      }
    };
    ((ee.doc =
      "DFS - Adds CTWA payload to current chat. This will be used by the l10n team and in bug bashes."),
      (ee.paramsToExecute = []));
    function te(e) {
      var t,
        n,
        a = e.chatId || ((t = z) == null ? void 0 : t.id),
        i = (n = e.payload) != null ? n : "mock_data";
      if (a == null) {
        o("WALogger").ERROR(
          y ||
            (y = babelHelpers.taggedTemplateLiteralLoose([
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
            C ||
              (C = babelHelpers.taggedTemplateLiteralLoose([
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
          b ||
            (b = babelHelpers.taggedTemplateLiteralLoose([
              "error:debug:dfsMockCtwaPayload: Error adding CTWA payload to chat ",
              "",
            ])),
          a,
        );
      }
    }
    var ne = function (t) {
      te({
        chatId: t == null ? void 0 : t.chatId,
        payload: t == null ? void 0 : t.payload,
        ctwaSignals: t == null ? void 0 : t.ctwaSignals,
        fromMe: !1,
      });
    };
    ((ne.doc =
      "DFS - Mocks an INBOUND CTWA payload (fromMe=false) \u2014 customer-replied-to-our-ad scenario."),
      (ne.paramsToExecute = []));
    var re = function (t) {
      te({
        chatId: t == null ? void 0 : t.chatId,
        payload: t == null ? void 0 : t.payload,
        ctwaSignals: t == null ? void 0 : t.ctwaSignals,
        fromMe: !0,
      });
    };
    ((re.doc =
      "DFS - Mocks an OUTBOUND CTWA payload (fromMe=true) \u2014 this business clicked another business's ad scenario."),
      (re.paramsToExecute = []));
    var oe = function (t) {
      var e,
        n = t || ((e = z) == null ? void 0 : e.id);
      n === "all"
        ? (r("WAWebConversionTupleCollection").delete(),
          o("WALogger").LOG(
            v ||
              (v = babelHelpers.taggedTemplateLiteralLoose([
                "debug:dfsUnmockCtwaPayloadForCurrentChatOrChatId: Mocked CTWA payload for all chats successfully",
              ])),
          ))
        : n != null
          ? (r("WAWebConversionTupleCollection").remove(n),
            o("WALogger").LOG(
              S ||
                (S = babelHelpers.taggedTemplateLiteralLoose([
                  "debug:dfsUnmockCtwaPayloadForCurrentChatOrChatId: Removed CTWA payload for chat ",
                  " successfully",
                ])),
              n,
            ))
          : o("WALogger").ERROR(
              R ||
                (R = babelHelpers.taggedTemplateLiteralLoose([
                  "error:debug:dfsMockCtwaPayloadForCurrentChatOrChatId: please open any 1:1 chat you would like to mock by clicking on it in the chat list. Or provide a chatId to the method. Or provide 'all' to remove CTWA payload for all chats.",
                ])),
            );
    };
    ((oe.doc =
      "DFS - Removes CTWA payload from the current chat, or all chats if chatId is not provided. Will be used in bug bashes"),
      (oe.paramsToExecute = []));
    var ae = function () {
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").KEYS.CTWA_DATA_SHARING_UPSELL_ACTIVE,
        null,
      );
    };
    ((ae.doc =
      "DFS - Resets value of the flag used to control whether to show Data sharing Upsell on the first order creation if OptIn was cancelled"),
      (ae.paramsToExecute = []));
    var ie = function (t) {
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
    ((ie.doc =
      "DFS - Resets Consumer Transparency Icon. If no chat id provided clears all conversion tuples and permanent storage for icon markers"),
      (ie.paramsToExecute = []));
    var le = function (t) {
      var e,
        n = t || ((e = z) == null ? void 0 : e.id);
      if (n == null) {
        o("WALogger").ERROR(
          L ||
            (L = babelHelpers.taggedTemplateLiteralLoose([
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
    ((le.doc =
      "DFS - adds chatId to the perm storage. This will be used by l10n team. They do not need e2e, just to see the consumer dialog"),
      (le.paramsToExecute = []));
    var se = function () {
      var e = o(
        "WAWebCommonCTWAConsumerTransparency",
      ).shouldShowROWConsumerDisclosure();
    };
    ((se.doc =
      "DFS - checks if the updated consumer UI should be shown. This will be used by testers and bug bashers"),
      (se.paramsToExecute = []));
    var ue = (function () {
      var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
        var t,
          n = e || ((t = z) == null ? void 0 : t.id);
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
    ((ue.doc =
      "Lists - util to unapply all labels from a given chat, the current chat, or from all chats."),
      (ue.paramsToExecute = []));
    var ce = function () {
      var e = o("WAWebUserPrefsGeneral").getDetectedOutcomeOnboardingStatus(),
        t = e == null ? !0 : !e;
      (o("WAWebUserPrefsGeneral").setDetectedOutcomeOnboardingStatus(t),
        o("WALogger").LOG(
          E ||
            (E = babelHelpers.taggedTemplateLiteralLoose([
              "debug:dfsFlipCTWADetectedOutcomeOptIn: Flipped isOptedIn from ",
              " to ",
              "",
            ])),
          String(e),
          String(t),
        ));
    };
    ((ce.doc =
      "DFS - Flips the isOptedIn value of WAWebCTWADetectedOutcomeModel. If null, sets to true."),
      (ce.paramsToExecute = []));
    var de = function () {
      o("WALogger").LOG(
        k ||
          (k = babelHelpers.taggedTemplateLiteralLoose([
            "debug: Current Detected Outcome onboarding status is: ",
            "",
          ])),
        String(o("WAWebUserPrefsGeneral").getDetectedOutcomeOnboardingStatus()),
      );
    };
    ((de.doc = "DFS - Display the value of WAWebCTWADetectedOutcomeModel."),
      (de.paramsToExecute = []));
    var me = function () {
      (o("WAWebUserPrefsGeneral").setCTWADataSharingDisclosureShownCount(0),
        o("WALogger").LOG(
          I ||
            (I = babelHelpers.taggedTemplateLiteralLoose([
              "debug: Reset CTWA Data Sharing Disclosure Shown Count to 0",
            ])),
        ));
    };
    ((me.doc =
      "DFS - Reset the CTWA Data Sharing Disclosure Shown Count to 0. This allows opted-out users to see the disclosure again."),
      (me.paramsToExecute = []));
    var pe = function (t) {
      (o("WAWebUserPrefsGeneral").setCTWADataSharingDisclosureShownCount(t),
        o("WALogger").LOG(
          T ||
            (T = babelHelpers.taggedTemplateLiteralLoose([
              "debug: Set CTWA Data Sharing Disclosure Shown Count to ",
              "",
            ])),
          String(t),
        ));
    };
    ((pe.doc =
      "DFS - Set the CTWA Data Sharing Disclosure Shown Count to a specific value."),
      (pe.paramsToExecute = [0]));
    var _e = function () {
      o("WALogger").LOG(
        D ||
          (D = babelHelpers.taggedTemplateLiteralLoose([
            "debug: CTWADataSharingDisclosure - Total Views: ",
            "",
          ])),
        String(
          o("WAWebUserPrefsGeneral").getCTWADataSharingDisclosureShownCount(),
        ),
      );
    };
    ((_e.doc =
      "DFS - Log the current CTWA Data Sharing Disclosure Shown Count to the console."),
      (_e.paramsToExecute = []));
    var fe = function () {
      (o("WAWebUserPrefsGeneral").setCTWADataSharingOptOutDisclosureShownCount(
        0,
      ),
        o("WALogger").LOG(
          x ||
            (x = babelHelpers.taggedTemplateLiteralLoose([
              "debug: Reset CTWA Opt-Out Disclosure Shown Count to 0",
            ])),
        ));
    };
    ((fe.doc =
      "DFS - Reset the CTWA Opt-Out Disclosure Shown Count to 0. This allows opted-out users who have dismissed the disclosure more than two times to see it again."),
      (fe.paramsToExecute = []));
    var ge = function () {
      o("WALogger").LOG(
        $ ||
          ($ = babelHelpers.taggedTemplateLiteralLoose([
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
    ((ge.doc =
      "DFS - Log the current CTWA Opt-Out Disclosure Shown Count to the console."),
      (ge.paramsToExecute = []));
    var he = (function () {
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
            P ||
              (P = babelHelpers.taggedTemplateLiteralLoose([
                "error:debug:dfsRenderDetectedOutcomeSystemMessage",
              ])),
          );
        }
      });
      return function (n, r) {
        return e.apply(this, arguments);
      };
    })();
    ((he.doc =
      "DFS - Creates and renders a system message of type biz_automatically_labeled_chat_system_message in the current chat."),
      (he.paramsToExecute = []));
    var ye = (function () {
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
            N ||
              (N = babelHelpers.taggedTemplateLiteralLoose([
                "error:debug:dfsSetNewMessageCappedStatus",
              ])),
          );
        }
        o("WALogger").LOG(
          M ||
            (M = babelHelpers.taggedTemplateLiteralLoose([
              "debug: Set New Message Capped Status",
            ])),
        );
      });
      return function () {
        return e.apply(this, arguments);
      };
    })();
    ((ye.doc = "DFS - Set New Message Capped Status"),
      (ye.paramsToExecute = []));
    var Ce = (function () {
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
            w ||
              (w = babelHelpers.taggedTemplateLiteralLoose([
                "error:debug:dfsResetNewMessageCappedStatus",
              ])),
          );
        }
        o("WALogger").LOG(
          A ||
            (A = babelHelpers.taggedTemplateLiteralLoose([
              "debug: Reset New Message Capped Status",
            ])),
        );
      });
      return function () {
        return e.apply(this, arguments);
      };
    })();
    ((Ce.doc = "DFS - Reset New Message Capped Status"),
      (Ce.paramsToExecute = []));
    var be = (function () {
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
              F ||
                (F = babelHelpers.taggedTemplateLiteralLoose([
                  "debug: Set First Warning Status",
                ])),
            ));
        } catch (e) {
          o("WALogger").ERROR(
            O ||
              (O = babelHelpers.taggedTemplateLiteralLoose([
                "error:debug:dfsSetFirstWarningStatus",
              ])),
          );
        }
      });
      return function () {
        return e.apply(this, arguments);
      };
    })();
    ((be.doc = "DFS - Set New Message Capping First Warning Status"),
      (be.paramsToExecute = []));
    var ve = (function () {
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
              B ||
                (B = babelHelpers.taggedTemplateLiteralLoose([
                  "debug: Set Second Warning Status",
                ])),
            ));
        } catch (e) {
          o("WALogger").ERROR(
            W ||
              (W = babelHelpers.taggedTemplateLiteralLoose([
                "error:debug:dfsSetSecondWarningStatus",
              ])),
          );
        }
      });
      return function () {
        return e.apply(this, arguments);
      };
    })();
    ((ve.doc = "DFS - Set New Message Capping Second Warning Status"),
      (ve.paramsToExecute = []));
    var Se = (function () {
      var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        try {
          (yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.remove(
            o("WAWebIndividualNewChatMessageCappingLimitUtils")
              .NEW_CHAT_MESSAGE_CAPPING_IDB_KEY,
          ),
            o("WAWebCmd").Cmd.newChatMessageCappingStateChange());
        } catch (e) {
          o("WALogger").ERROR(
            q ||
              (q = babelHelpers.taggedTemplateLiteralLoose([
                "error:debug:dfsClearNewMessageCappedData",
              ])),
          );
        }
        o("WALogger").LOG(
          U ||
            (U = babelHelpers.taggedTemplateLiteralLoose([
              "debug: Clear New Message Capped Data",
            ])),
        );
      });
      return function () {
        return e.apply(this, arguments);
      };
    })();
    ((Se.doc = "DFS - Clear New Message Capped data"),
      (Se.paramsToExecute = []));
    var Re = (function () {
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
            V ||
              (V = babelHelpers.taggedTemplateLiteralLoose([
                "error:debug:dfsSetCappedWithOTEEligible",
              ])),
          );
        }
        o("WALogger").LOG(
          H ||
            (H = babelHelpers.taggedTemplateLiteralLoose([
              "debug: Set Capped With OTE Eligible",
            ])),
        );
      });
      return function () {
        return e.apply(this, arguments);
      };
    })();
    ((Re.doc = "DFS - Set capping status to CAPPED with OTE ELIGIBLE"),
      (Re.paramsToExecute = []));
    var Le = (function () {
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
            G ||
              (G = babelHelpers.taggedTemplateLiteralLoose([
                "error:debug:dfsRenderConsumerDataDisclosureSystemMessage",
              ])),
          );
        }
      });
      return function (n) {
        return e.apply(this, arguments);
      };
    })();
    ((Le.doc =
      "DFS - Creates and renders a system message of type ctwa_consumer_data_disclosure in the current chat."),
      (Le.paramsToExecute = []));
    var Ee = {
      dfsSmbSettingReset: K,
      dfsSmbSettingResetLocal: Q,
      dfsSmbSettingOptInLocal: X,
      dfsSmbSettingOptOutLocal: Y,
      dfsSmbSettingServerFetch: J,
      dfsSmbSettingLocalFetch: Z,
      dfsSmbUpsellReset: ae,
      dfsMockCtwaPayloadForCurrentChatOrChatId: ee,
      dfsMockReceivedCtwaPayloadForCurrentChatOrChatId: ne,
      dfsMockSentCtwaPayloadForCurrentChatOrChatId: re,
      dfsUnmockCtwaPayloadForCurrentChatOrChatId: oe,
      dfsConsumerIconReset: ie,
      dfsConsumerMockInfoIconForCurrentChatOrChatId: le,
      dfsSmbSettingModel: o("WAWebCTWADataSharingModel").CTWADataSharingModel,
      dfsSmbCoolOffModel: o("WAWebDataSharingOptInCoolOffModel")
        .DataSharingOptInCoolOffModel,
      dfsSmbUpsellModel: r("WAWebDataSharingUpsellModel"),
      dfsConsumerInfoIconModel: o("WAWebConsumerTransparencyInfoIconModel")
        .ConsumerTransparencyInfoIconModel,
      dfsInitialize: j,
      dfsShouldShowROWConsumerDisclosure: se,
      dfsFlipCTWADetectedOutcomeOptIn: ce,
      dfsDisplayCTWADetectedOutcomeOnboardingStatus: de,
      dfsResetCTWADataSharingDisclosureShownCount: me,
      dfsSetCTWADataSharingDisclosureShownCount: pe,
      dfsDisplayCTWADataSharingDisclosureShownCount: _e,
      dfsResetCTWADataSharingOptOutDisclosureShownCount: fe,
      dfsDisplayCTWADataSharingOptOutDisclosureShownCount: ge,
      dfsRenderDetectedOutcomeSystemMessage: he,
      labelsUnassignAllLabelsFromChat: ue,
      dfsSetNewMessageCappedStatus: ye,
      dfsSetFirstWarningStatus: be,
      dfsSetSecondWarningStatus: ve,
      dfsResetNewMessageCappedStatus: Ce,
      dfsClearNewMessageCappedData: Se,
      dfsSetCappedWithOTEEligible: Re,
      dfsRenderConsumerDataDisclosureSystemMessage: Le,
    };
    l.default = Ee;
  },
  98,
);
