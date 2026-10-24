__d(
  "WAWebDebugDownFunnelSignals",
  [
    "WAArrayBufferUtils",
    "WALogger",
    "WASmaxBizSettingsGetPrivacySettingRPC",
    "WASmaxInBizSettingsEnums",
    "WATimeUtils",
    "WAWebABPropsCache",
    "WAWebABPropsConfigs",
    "WAWebAECompanionEligibility",
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
    "WAWebDebugABProps",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebIndividualNewChatMessageCappingLimitUtils",
    "WAWebLabelCollection",
    "WAWebMobilePlatforms",
    "WAWebMsgType",
    "WAWebPrimaryFeaturesModel",
    "WAWebSMBDataSharingSettingAction",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsStore",
    "WAWebUserPrefsTypes",
    "asyncToGeneratorRuntime",
    "nullthrows",
    "vulture",
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
      oe,
      ae;
    function ie() {
      (r("vulture")("Kl2iMMR9zcQgmwwXcUD3UGnwWrI="),
        o("WAWebCmd").Cmd.on("open_chat", function (e) {
          var t = e.chat;
          (r("vulture")("xBUKpDL6kQMXGownAgNIoBG_GxM="), (ae = t));
        }));
    }
    var le = (function () {
      var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
        return (
          r("vulture")("mjgKP6shTGmyHwvZu7UVyck7WWE="),
          o("WAWebSMBDataSharingSettingAction")
            .setSMBDataSharingSettingAction(
              o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.notset,
              t,
            )
            .then(function (t) {
              var n;
              return (
                r("vulture")("ds2i3tsiqooHEaUOzFTZNwqNBSk="),
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
              (r("vulture")("MWBQcjb9KZejnugTP6EpunMpuu0="),
                o("WALogger").ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "error:debug:resetDataSharingToNotset",
                    ])),
                ));
            })
        );
      });
      return function (n) {
        return t.apply(this, arguments);
      };
    })();
    ((le.doc =
      'DFS - resets SMB Data Sharing setting on the server. Sets the value to "notset" (optional version)'),
      (le.paramsToExecute = []));
    var se = (function () {
      var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
        return (
          r("vulture")("L-MpgF_pa7MGikW3Ib0YervhQbE="),
          o("WAWebSMBDataSharingSettingAction")
            .setSMBDataSharingSettingAction(e, t)
            .then(function (e) {
              return (
                r("vulture")("m4kRbIav6Y5-J_7hNIBCoqEiCTg="),
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
                r("vulture")("LWtCQxzuSxeBrT3qlkEV5jHSQxM="),
                o("WALogger").ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "error:debug:dataSharingSettingServerSet",
                    ])),
                ),
                null
              );
            })
        );
      });
      return function (n, r) {
        return e.apply(this, arguments);
      };
    })();
    ((se.doc =
      'DFS - Sets the SMB Data Sharing setting on the server to a given value ("true"/"false"/"notset") and optional disclosure version'),
      (se.paramsToExecute = [
        o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true,
        2,
      ]));
    var ue = function (t) {
      (r("vulture")("tZKjoyDmLsfMAfQ8CVCi4UTSQCo="),
        o("WAWebCTWADataSharingModel").CTWADataSharingModel.setValue(
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
    ((ue.doc =
      "DFS - resets SMB Data Sharing setting locally (client-only, no server RPC; optional version)"),
      (ue.paramsToExecute = []));
    var ce = function (t) {
      (r("vulture")("1i2KzJZ4HIHIA7RRHSE20aGh-QM="),
        o("WAWebCTWADataSharingModel").CTWADataSharingModel.setValue(
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
    ((ce.doc =
      "DFS - sets SMB Data Sharing setting to true locally (client-only, no server RPC; optional version)"),
      (ce.paramsToExecute = []));
    var de = function (t) {
      (r("vulture")("EArX1enQK9FsqALnUgIup-czk5c="),
        o("WAWebCTWADataSharingModel").CTWADataSharingModel.setValue(
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
    ((de.doc =
      "DFS - sets SMB Data Sharing setting to false locally (client-only, no server RPC; optional version)"),
      (de.paramsToExecute = []));
    var me = function () {
      (r("vulture")("NBGZAEvbMDGFT5Q1yalK7kyOKuA="),
        r("WAWebUserPrefsStore").set(
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
    ((me.doc =
      'DFS - Resets the "v2 disclosure seen" flag so the v2 (ePD) disclosure is treated as not-yet-seen and can be shown again.'),
      (me.paramsToExecute = []));
    var pe = (function () {
      var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        r("vulture")("QMoE5xlSIwmaSBAIgFI5Zyi09Wk=");
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
    ((pe.doc =
      "DFS - Fetches the SMB Data Sharing setting (value + disclosure version) from the server"),
      (pe.paramsToExecute = []));
    var _e = function () {
      r("vulture")("3cr-4VOoTfEmqsZZWQyDP62KhH8=");
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
    ((_e.doc =
      "DFS - Reads the SMB Data Sharing setting (value + disclosure version) from the local client model (no server RPC)"),
      (_e.paramsToExecute = []));
    var fe = function (t) {
      var e, n;
      r("vulture")("83Mj5sx7LzuWhghY-2VwutP98eY=");
      var a =
          (t == null ? void 0 : t.chatId) || ((e = ae) == null ? void 0 : e.id),
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
    ((fe.doc =
      "DFS - Adds CTWA payload to current chat. This will be used by the l10n team and in bug bashes."),
      (fe.paramsToExecute = []));
    function ge(e) {
      var t, n;
      r("vulture")("9iky1ovxR6kybPXjoS8DaYyTE_U=");
      var a = e.chatId || ((t = ae) == null ? void 0 : t.id),
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
    var he = function (t) {
      (r("vulture")("VFPBj3x79Am6og3dKwnDAqVkQk4="),
        ge({
          chatId: t == null ? void 0 : t.chatId,
          payload: t == null ? void 0 : t.payload,
          ctwaSignals: t == null ? void 0 : t.ctwaSignals,
          fromMe: !1,
        }));
    };
    ((he.doc =
      "DFS - Mocks an INBOUND CTWA payload (fromMe=false) \u2014 customer-replied-to-our-ad scenario."),
      (he.paramsToExecute = []));
    var ye = function (t) {
      var e, n;
      r("vulture")("vGP2Bbm3XNLrOD1CPYZTRZRhLAA=");
      var a =
        (t == null ? void 0 : t.chatId) || ((e = ae) == null ? void 0 : e.id);
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
    ((ye.doc =
      'DFS - Mocks an INBOUND 3pdag (EPD) CTWA thread: FB_Ads source, ctwaSignals="3pdag,3pdag", null encrypted payload, seeded ad id (fromMe=false). Simulates an ePD-customer thread.'),
      (ye.paramsToExecute = []));
    var Ce = function (t) {
      (r("vulture")("VpGdDq3zs7EeiERIF6TFCBNGVu4="),
        ge({
          chatId: t == null ? void 0 : t.chatId,
          payload: t == null ? void 0 : t.payload,
          ctwaSignals: t == null ? void 0 : t.ctwaSignals,
          fromMe: !0,
        }));
    };
    ((Ce.doc =
      "DFS - Mocks an OUTBOUND CTWA payload (fromMe=true) \u2014 this business clicked another business's ad scenario."),
      (Ce.paramsToExecute = []));
    var be = function (t) {
      var e;
      r("vulture")("uqqx-n1RGeJLvO7CSkTHYSyNhBA=");
      var n = t || ((e = ae) == null ? void 0 : e.id);
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
    ((be.doc =
      "DFS - Removes CTWA payload from the current chat, or all chats if chatId is not provided. Will be used in bug bashes"),
      (be.paramsToExecute = []));
    var ve = function () {
      (r("vulture")("GH8WVB2LI6MuoOaiJzZu4qzkPEE="),
        r("WAWebUserPrefsStore").set(
          o("WAWebUserPrefsKeys").KEYS.CTWA_DATA_SHARING_UPSELL_ACTIVE,
          null,
        ));
    };
    ((ve.doc =
      "DFS - Resets value of the flag used to control whether to show Data sharing Upsell on the first order creation if OptIn was cancelled"),
      (ve.paramsToExecute = []));
    var Se = function (t) {
      if ((r("vulture")("h7_XiQommhRXLL6BNvpASA1dVzU="), t)) {
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
    ((Se.doc =
      "DFS - Resets Consumer Transparency Icon. If no chat id provided clears all conversion tuples and permanent storage for icon markers"),
      (Se.paramsToExecute = []));
    var Re = function (t) {
      var e;
      r("vulture")("FQzmbU5jXDIc5jxLOZXHcvV_BqA=");
      var n = t || ((e = ae) == null ? void 0 : e.id);
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
    ((Re.doc =
      "DFS - adds chatId to the perm storage. This will be used by l10n team. They do not need e2e, just to see the consumer dialog"),
      (Re.paramsToExecute = []));
    var Le = function () {
      r("vulture")("8x6eoxxzYUkDumLQ87ac-Q8tnvk=");
      var e = o(
        "WAWebCommonCTWAConsumerTransparency",
      ).shouldShowROWConsumerDisclosure();
    };
    ((Le.doc =
      "DFS - checks if the updated consumer UI should be shown. This will be used by testers and bug bashers"),
      (Le.paramsToExecute = []));
    var Ee = (function () {
      var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
        var t;
        r("vulture")("YeI7IanHM2KdGMCe9TZmY55PhLo=");
        var n = e || ((t = ae) == null ? void 0 : t.id);
        if (n != null) {
          var a = new Map([]);
          if (n === "all")
            o("WAWebChatCollection").ChatCollection.forEach(function (e) {
              var t, n;
              if (
                (r("vulture")("b0CILf10bNwLVjSqv8jNBHvIXeQ="),
                ((t = (n = e.labels) == null ? void 0 : n.length) != null
                  ? t
                  : 0) > 0)
              ) {
                var o;
                a.set(e.id.toString(), (o = e.labels) != null ? o : []);
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
              r("vulture")("UxUZ4Yhmovr1mzlI_WGO0BRcuP0=");
              var n = r("nullthrows")(
                  o("WAWebChatCollection").ChatCollection.get(t),
                ),
                a = e.map(function (e) {
                  return (
                    r("vulture")("l6FV1qOB3WqJyW1KkM6Sja4Tbok="),
                    { id: e, type: "remove" }
                  );
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
    ((Ee.doc =
      "Lists - util to unapply all labels from a given chat, the current chat, or from all chats."),
      (Ee.paramsToExecute = []));
    var ke = function () {
      r("vulture")("aEdHjLDNu31BjfOiM70v9xCVKNk=");
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
    ((ke.doc =
      "DFS - Flips the isOptedIn value of WAWebCTWADetectedOutcomeModel. If null, sets to true."),
      (ke.paramsToExecute = []));
    var Ie = function () {
      r("vulture")("mdJ4KWbPShIPR1pjqMVNHSiG38U=");
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
    ((Ie.doc = "DFS - Display the value of WAWebCTWADetectedOutcomeModel."),
      (Ie.paramsToExecute = []));
    var Te = (function () {
      var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        r("vulture")("-DoBQC5Giy_iazumoHMBF0p9Gl4=");
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
    ((Te.doc =
      "DFS - Fetch the account's canonical coex product state (product_states from Get BSP Info) and log the validated result without storing it."),
      (Te.paramsToExecute = []));
    var De = function () {
      r("vulture")("QiOnPn3ud3U6D4sR375UX3J-_dg=");
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
    ((De.doc =
      "DFS - Show the stored coex product state (WACoexProductState in the IndexedDB user prefs), or null when none is stored."),
      (De.paramsToExecute = []));
    var xe = function () {
      (r("vulture")("KcOHiTSpp07NEnjprRL77RmQUes="),
        o("WAWebCoexProductStateStore").clearCoexProductState(),
        o("WALogger").LOG(
          A ||
            (A = babelHelpers.taggedTemplateLiteralLoose([
              "debug: cleared the stored coex product state",
            ])),
        ));
    };
    ((xe.doc =
      "DFS - Clear the stored coex product state (WACoexProductState in the IndexedDB user prefs)."),
      (xe.paramsToExecute = []));
    var $e = (function () {
      var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        return (
          r("vulture")("-iajjepXTx3h5ILgAecTox-yy8g="),
          yield o("WAWebCoexStateSyncCoordinator").requestCoexStateRefresh(
            "debug",
          ),
          De()
        );
      });
      return function () {
        return e.apply(this, arguments);
      };
    })();
    (($e.doc =
      "DFS - Pull the canonical coex product state through the refresh coordinator, store it when the snapshot is valid, then show the stored copy."),
      ($e.paramsToExecute = []));
    var Pe = function () {
      var e,
        t,
        n,
        r = {
          ctwa_coex_state_sync_enabled: (n =
            o("WAWebABPropsCache")).peekABPropConfigValue(
            "ctwa_coex_state_sync_enabled",
          ),
          ctwa_smb_ae_onboarding_compatability_code: n.peekABPropConfigValue(
            "ctwa_smb_ae_onboarding_compatability_code",
          ),
          ctwa_smb_ae_onboarding_enabled: n.peekABPropConfigValue(
            "ctwa_smb_ae_onboarding_enabled",
          ),
          ctwa_smb_ae_companion_onboarding_enabled: n.peekABPropConfigValue(
            "ctwa_smb_ae_companion_onboarding_enabled",
          ),
        },
        a = o("WAWebMobilePlatforms").isSMB(),
        i = o("WAWebUserPrefsGeneral").getCTWAMessageReceived(),
        l = o("WAWebPrimaryFeaturesModel").PrimaryFeatures.hasFeature(
          "ctwa_message_received",
        ),
        s =
          (e =
            (t = o("WAWebCoexProductStateStore").getCoexProductState()) == null
              ? void 0
              : t.surfaces) != null
            ? e
            : null,
        u = {
          isBusinessAccount: function () {
            return a;
          },
          hasCtwaContext: function () {
            return i || l;
          },
          getCoexSurfaces: function () {
            return r.ctwa_coex_state_sync_enabled.value === !0 ? s : null;
          },
          getCompatibilityBits: function () {
            return Number(r.ctwa_smb_ae_onboarding_compatability_code.value);
          },
          isOnboardingFeatureEnabled: function () {
            return r.ctwa_smb_ae_onboarding_enabled.value === !0;
          },
          isCompanionGateEnabled: function () {
            return r.ctwa_smb_ae_companion_onboarding_enabled.value === !0;
          },
        },
        c = o("WAWebAECompanionEligibility").getAEOnboardingRouteResult(u),
        d = {
          aeSwitch: (function (e) {
            return Array.isArray(e) && e.length === 2 && e[0] === !0
              ? "on"
              : Array.isArray(e) && e.length === 2 && e[1] === "presented"
                ? "off"
                : "hidden";
          })([o("WAWebAECompanionEligibility").isAEOffboardingAvailable(u), c]),
          route: c,
          isBusinessAccount: a,
          webCtwaMessageReceived: i,
          primaryCtwaMessageReceived: l,
          storedCoexSurfaces: s,
          props: r,
        };
      return (
        o("WALogger").LOG(
          F ||
            (F = babelHelpers.taggedTemplateLiteralLoose([
              "debug: AE companion eligibility: ",
              "",
            ])),
          JSON.stringify(d),
        ),
        d
      );
    };
    ((Pe.doc =
      "DFS - Show whether the AE switch in Lists is on, off or hidden, the eligibility route, and every input it reads, including each ABProp value and where it came from. Logs no exposures."),
      (Pe.paramsToExecute = []));
    var Ne = (function () {
      var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        return (
          o("WAWebMobilePlatforms").isSMB() &&
            (yield Me("ctwa_coex_state_sync_enabled"),
            yield Me("ctwa_smb_ae_onboarding_compatability_code"),
            yield Me("ctwa_smb_ae_onboarding_enabled"),
            yield Me("ctwa_smb_ae_companion_onboarding_enabled"),
            yield o("WAWebCoexStateSyncCoordinator").requestCoexStateRefresh(
              "debug",
            )),
          Pe()
        );
      });
      return function () {
        return e.apply(this, arguments);
      };
    })();
    ((Ne.doc =
      "DFS - Override the AE-on-companions ABProps on this browser with their debug defaults, pull the coex state, then show dfsAECompanionEligibility. Does nothing on a consumer account."),
      (Ne.paramsToExecute = []));
    function Me(e) {
      return r("WAWebDebugABProps").overrideABProp(
        e,
        o("WAWebABPropsConfigs").ABPropConfigs[e][3],
      );
    }
    var we = function () {
      (r("vulture")("92QETC8tXo11s60ssXp8jkPUYBc="),
        o("WAWebUserPrefsGeneral").setCTWADataSharingDisclosureShownCount(0),
        o("WALogger").LOG(
          O ||
            (O = babelHelpers.taggedTemplateLiteralLoose([
              "debug: Reset CTWA Data Sharing Disclosure Shown Count to 0",
            ])),
        ));
    };
    ((we.doc =
      "DFS - Reset the CTWA Data Sharing Disclosure Shown Count to 0. This allows opted-out users to see the disclosure again."),
      (we.paramsToExecute = []));
    var Ae = function (t) {
      (r("vulture")("t0-Rw81RzbCXTRKyinxtN118yIU="),
        o("WAWebUserPrefsGeneral").setCTWADataSharingDisclosureShownCount(t),
        o("WALogger").LOG(
          B ||
            (B = babelHelpers.taggedTemplateLiteralLoose([
              "debug: Set CTWA Data Sharing Disclosure Shown Count to ",
              "",
            ])),
          String(t),
        ));
    };
    ((Ae.doc =
      "DFS - Set the CTWA Data Sharing Disclosure Shown Count to a specific value."),
      (Ae.paramsToExecute = [0]));
    var Fe = function () {
      (r("vulture")("jwjx35W2gCxq5m48AP3Ip_sdqxM="),
        o("WALogger").LOG(
          W ||
            (W = babelHelpers.taggedTemplateLiteralLoose([
              "debug: CTWADataSharingDisclosure - Total Views: ",
              "",
            ])),
          String(
            o("WAWebUserPrefsGeneral").getCTWADataSharingDisclosureShownCount(),
          ),
        ));
    };
    ((Fe.doc =
      "DFS - Log the current CTWA Data Sharing Disclosure Shown Count to the console."),
      (Fe.paramsToExecute = []));
    var Oe = function () {
      (r("vulture")("lIXjR0623wuh2lWqHOiipFAK7qA="),
        o("WAWebUserPrefsGeneral").setCTWADataSharingOptOutDisclosureShownCount(
          0,
        ),
        o("WALogger").LOG(
          q ||
            (q = babelHelpers.taggedTemplateLiteralLoose([
              "debug: Reset CTWA Opt-Out Disclosure Shown Count to 0",
            ])),
        ));
    };
    ((Oe.doc =
      "DFS - Reset the CTWA Opt-Out Disclosure Shown Count to 0. This allows opted-out users who have dismissed the disclosure more than two times to see it again."),
      (Oe.paramsToExecute = []));
    var Be = function () {
      (r("vulture")("LuaQRzdLywn7Ghmg6WT8TaYejWE="),
        o("WALogger").LOG(
          U ||
            (U = babelHelpers.taggedTemplateLiteralLoose([
              "debug: CTWAOptOutDisclosure - Total Views: ",
              "",
            ])),
          String(
            o(
              "WAWebUserPrefsGeneral",
            ).getCTWADataSharingOptOutDisclosureShownCount(),
          ),
        ));
    };
    ((Be.doc =
      "DFS - Log the current CTWA Opt-Out Disclosure Shown Count to the console."),
      (Be.paramsToExecute = []));
    var We = function () {
      (r("vulture")("XcrAF0MEyFg5TzDYCL_Ib3kcyjk="),
        o("WALogger").LOG(
          V ||
            (V = babelHelpers.taggedTemplateLiteralLoose([
              "debug: CTWAMessageReceived: ",
              "",
            ])),
          String(o("WAWebUserPrefsGeneral").getCTWAMessageReceived()),
        ));
    };
    ((We.doc =
      'DFS - Log the current CTWA-message-received flag. This flag gates the "Your customers\' activity" settings row.'),
      (We.paramsToExecute = []));
    var qe = function () {
      (r("vulture")("Jg1RwUV_1-nhZ87co8tEMd9WHQM="),
        o("WAWebUserPrefsGeneral").setCTWAMessageReceived(!1),
        o("WALogger").LOG(
          H ||
            (H = babelHelpers.taggedTemplateLiteralLoose([
              "debug: Reset CTWAMessageReceived to false",
            ])),
        ));
    };
    ((qe.doc =
      'DFS - Reset the CTWA-message-received flag to false, so the "Your customers\' activity" settings row is hidden again until the next CTWA message is received.'),
      (qe.paramsToExecute = []));
    var Ue = (function () {
      var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
        r("vulture")("3KnmSv_yLxFWwguJ2pXPy-2kFw8=");
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
            G ||
              (G = babelHelpers.taggedTemplateLiteralLoose([
                "error:debug:dfsRenderDetectedOutcomeSystemMessage",
              ])),
          );
        }
      });
      return function (n, r) {
        return e.apply(this, arguments);
      };
    })();
    ((Ue.doc =
      "DFS - Creates and renders a system message of type biz_automatically_labeled_chat_system_message in the current chat."),
      (Ue.paramsToExecute = []));
    var Ve = (function () {
      var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        r("vulture")("FbSjr-UY1zA7xu49l_WBPC_cBHU=");
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
            z ||
              (z = babelHelpers.taggedTemplateLiteralLoose([
                "error:debug:dfsSetNewMessageCappedStatus",
              ])),
          );
        }
        o("WALogger").LOG(
          j ||
            (j = babelHelpers.taggedTemplateLiteralLoose([
              "debug: Set New Message Capped Status",
            ])),
        );
      });
      return function () {
        return e.apply(this, arguments);
      };
    })();
    ((Ve.doc = "DFS - Set New Message Capped Status"),
      (Ve.paramsToExecute = []));
    var He = (function () {
      var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        r("vulture")("cf8X8UC1C5CgDMIUztaXja-3A5s=");
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
            K ||
              (K = babelHelpers.taggedTemplateLiteralLoose([
                "error:debug:dfsResetNewMessageCappedStatus",
              ])),
          );
        }
        o("WALogger").LOG(
          Q ||
            (Q = babelHelpers.taggedTemplateLiteralLoose([
              "debug: Reset New Message Capped Status",
            ])),
        );
      });
      return function () {
        return e.apply(this, arguments);
      };
    })();
    ((He.doc = "DFS - Reset New Message Capped Status"),
      (He.paramsToExecute = []));
    var Ge = (function () {
      var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        r("vulture")("PZPUXUPHsOKIHveiPlwZbIhNmI4=");
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
              X ||
                (X = babelHelpers.taggedTemplateLiteralLoose([
                  "debug: Set First Warning Status",
                ])),
            ));
        } catch (e) {
          o("WALogger").ERROR(
            Y ||
              (Y = babelHelpers.taggedTemplateLiteralLoose([
                "error:debug:dfsSetFirstWarningStatus",
              ])),
          );
        }
      });
      return function () {
        return e.apply(this, arguments);
      };
    })();
    ((Ge.doc = "DFS - Set New Message Capping First Warning Status"),
      (Ge.paramsToExecute = []));
    var ze = (function () {
      var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        r("vulture")("HB2XzA99rpvp7wPEuDt3hdQcVfk=");
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
              J ||
                (J = babelHelpers.taggedTemplateLiteralLoose([
                  "debug: Set Second Warning Status",
                ])),
            ));
        } catch (e) {
          o("WALogger").ERROR(
            Z ||
              (Z = babelHelpers.taggedTemplateLiteralLoose([
                "error:debug:dfsSetSecondWarningStatus",
              ])),
          );
        }
      });
      return function () {
        return e.apply(this, arguments);
      };
    })();
    ((ze.doc = "DFS - Set New Message Capping Second Warning Status"),
      (ze.paramsToExecute = []));
    var je = (function () {
      var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        r("vulture")("FVGZWDiU2BCJ9_vEBeE5TyoyLdw=");
        try {
          (yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.remove(
            o("WAWebIndividualNewChatMessageCappingLimitUtils")
              .NEW_CHAT_MESSAGE_CAPPING_IDB_KEY,
          ),
            o("WAWebCmd").Cmd.newChatMessageCappingStateChange());
        } catch (e) {
          o("WALogger").ERROR(
            ee ||
              (ee = babelHelpers.taggedTemplateLiteralLoose([
                "error:debug:dfsClearNewMessageCappedData",
              ])),
          );
        }
        o("WALogger").LOG(
          te ||
            (te = babelHelpers.taggedTemplateLiteralLoose([
              "debug: Clear New Message Capped Data",
            ])),
        );
      });
      return function () {
        return e.apply(this, arguments);
      };
    })();
    ((je.doc = "DFS - Clear New Message Capped data"),
      (je.paramsToExecute = []));
    var Ke = (function () {
      var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        r("vulture")("G3c2VlmziJYmxj6yuxL0NO_8h_g=");
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
            ne ||
              (ne = babelHelpers.taggedTemplateLiteralLoose([
                "error:debug:dfsSetCappedWithOTEEligible",
              ])),
          );
        }
        o("WALogger").LOG(
          re ||
            (re = babelHelpers.taggedTemplateLiteralLoose([
              "debug: Set Capped With OTE Eligible",
            ])),
        );
      });
      return function () {
        return e.apply(this, arguments);
      };
    })();
    ((Ke.doc = "DFS - Set capping status to CAPPED with OTE ELIGIBLE"),
      (Ke.paramsToExecute = []));
    var Qe = (function () {
      var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
        r("vulture")("nl0WhX_WOJ2OQuDP0iisBIejhU8=");
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
            oe ||
              (oe = babelHelpers.taggedTemplateLiteralLoose([
                "error:debug:dfsRenderConsumerDataDisclosureSystemMessage",
              ])),
          );
        }
      });
      return function (n) {
        return e.apply(this, arguments);
      };
    })();
    ((Qe.doc =
      "DFS - Creates and renders a system message of type ctwa_consumer_data_disclosure in the current chat."),
      (Qe.paramsToExecute = []));
    var Xe = {
      dfsSmbSettingReset: le,
      dfsSmbSettingServerSet: se,
      dfsSmbSettingResetLocal: ue,
      dfsSmbSettingOptInLocal: ce,
      dfsSmbSettingOptOutLocal: de,
      dfsSmbSettingServerFetch: pe,
      dfsSmbSettingLocalFetch: _e,
      dfsResetV2DisclosureSeen: me,
      dfsSmbUpsellReset: ve,
      dfsMockCtwaPayloadForCurrentChatOrChatId: fe,
      dfsMockReceivedCtwaPayloadForCurrentChatOrChatId: he,
      dfsMockReceived3pdagCtwaThreadForCurrentChatOrChatId: ye,
      dfsMockSentCtwaPayloadForCurrentChatOrChatId: Ce,
      dfsUnmockCtwaPayloadForCurrentChatOrChatId: be,
      dfsConsumerIconReset: Se,
      dfsConsumerMockInfoIconForCurrentChatOrChatId: Re,
      dfsSmbSettingModel: o("WAWebCTWADataSharingModel").CTWADataSharingModel,
      dfsSmbCoolOffModel: o("WAWebDataSharingOptInCoolOffModel")
        .DataSharingOptInCoolOffModel,
      dfsSmbUpsellModel: {
        enableUpsell: o("WAWebDataSharingUpsellModel").enableUpsell,
        isUpsellEnabled: o("WAWebDataSharingUpsellModel").isUpsellEnabled,
      },
      dfsConsumerInfoIconModel: o("WAWebConsumerTransparencyInfoIconModel")
        .ConsumerTransparencyInfoIconModel,
      dfsInitialize: ie,
      dfsShouldShowROWConsumerDisclosure: Le,
      dfsFlipCTWADetectedOutcomeOptIn: ke,
      dfsDisplayCTWADetectedOutcomeOnboardingStatus: Ie,
      dfsFetchCoexCanonicalState: Te,
      dfsShowCoexProductState: De,
      dfsClearCoexProductState: xe,
      dfsRefreshCoexState: $e,
      dfsAECompanionEligibility: Pe,
      dfsAECompanionSetup: Ne,
      dfsResetCTWADataSharingDisclosureShownCount: we,
      dfsSetCTWADataSharingDisclosureShownCount: Ae,
      dfsDisplayCTWADataSharingDisclosureShownCount: Fe,
      dfsResetCTWADataSharingOptOutDisclosureShownCount: Oe,
      dfsDisplayCTWADataSharingOptOutDisclosureShownCount: Be,
      dfsDisplayCTWAMessageReceived: We,
      dfsResetCTWAMessageReceived: qe,
      dfsRenderDetectedOutcomeSystemMessage: Ue,
      labelsUnassignAllLabelsFromChat: Ee,
      dfsSetNewMessageCappedStatus: Ve,
      dfsSetFirstWarningStatus: Ge,
      dfsSetSecondWarningStatus: ze,
      dfsResetNewMessageCappedStatus: He,
      dfsClearNewMessageCappedData: je,
      dfsSetCappedWithOTEEligible: Ke,
      dfsRenderConsumerDataDisclosureSystemMessage: Qe,
    };
    l.default = Xe;
  },
  98,
);
