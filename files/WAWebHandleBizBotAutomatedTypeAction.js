__d(
  "WAWebHandleBizBotAutomatedTypeAction",
  [
    "WAWebApiBusinessProfile",
    "WAWebBotBaseGating",
    "WAWebBotSystemMsg",
    "WAWebBotTos",
    "WAWebBotTypes",
    "WAWebBotUtils",
    "WAWebChatCollection",
    "WAWebContactSystemMsg",
    "WAWebDBProcessMessage",
    "WAWebMsgModelFromData",
    "WAWebPrivacyModeSystemMsg",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = o("WAWebChatCollection").ChatCollection.get(e);
          if (r && !o("WAWebBotUtils").isMetaAiBot(e)) {
            var a = t;
            if (!a) {
              var i,
                l = yield o("WAWebApiBusinessProfile").getBusinessProfileRow(
                  e.toString(),
                );
              a =
                (i = o("WAWebBotTypes").BizBotAutomatedType.cast(
                  l == null ? void 0 : l.automatedType,
                )) != null
                  ? i
                  : o("WAWebBotTypes").BizBotAutomatedType.UNKNOWN;
            }
            var s =
              n != null ? n : o("WAWebBotTypes").BizBotAutomatedType.UNKNOWN;
            a !== s &&
              (a === o("WAWebBotTypes").BizBotAutomatedType.UNKNOWN &&
              s === o("WAWebBotTypes").BizBotAutomatedType.PARTIAL_1P
                ? yield u(r)
                : a === o("WAWebBotTypes").BizBotAutomatedType.UNKNOWN &&
                    s === o("WAWebBotTypes").BizBotAutomatedType.FULL_3P
                  ? yield d(r)
                  : a === o("WAWebBotTypes").BizBotAutomatedType.FULL_3P &&
                    s === o("WAWebBotTypes").BizBotAutomatedType.UNKNOWN &&
                    (yield p(r)));
          }
        })),
        s.apply(this, arguments)
      );
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            !(
              !o("WAWebBotTos").hasAcceptedBizBotTos() ||
              e.bizBotSystemMsgType === o("WAWebBotTypes").BizBotType.BIZ_1P
            )
          ) {
            var t = o("WAWebBotSystemMsg").genBizBot1pDisclosureMessage(e.id);
            if (
              (yield o("WAWebDBProcessMessage").storeMessages([t], t.id.remote),
              o("WAWebBotBaseGating").isBizBot1pEnabled())
            ) {
              var n = o("WAWebMsgModelFromData").msgModelFromMsgData(t);
              e.msgs.add(n);
            }
            yield e.updateBizBotSysMsgCreated(
              o("WAWebBotTypes").BizBotType.BIZ_1P,
            );
          }
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            !(
              !o("WAWebBotTos").hasAcceptedBizBotTos() ||
              e.bizBotSystemMsgType === o("WAWebBotTypes").BizBotType.BIZ_3P
            )
          ) {
            var t = o("WAWebBotSystemMsg").genBizBot3pDisclosureMessage(e.id);
            yield o("WAWebDBProcessMessage").storeMessages([t], t.id.remote);
            var n = o("WAWebMsgModelFromData").msgModelFromMsgData(t);
            (e.msgs.add(n),
              yield e.updateBizBotSysMsgCreated(
                o("WAWebBotTypes").BizBotType.BIZ_3P,
              ));
          }
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.bizBotSystemMsgType != null) {
            var t = e.id,
              n,
              a = o("WAWebPrivacyModeSystemMsg").getReducedPrivacyMode(
                e.contact.privacyMode,
              );
            switch (a) {
              case o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.E2EE:
                n = o("WAWebContactSystemMsg").genEncryptNotificationMsg(
                  t,
                  "encrypt_now",
                );
                break;
              case o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.BSP:
                n = o("WAWebContactSystemMsg").genNonE2ENotificationMsg(
                  t,
                  "biz_privacy_mode_to_bsp",
                );
                break;
              case o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.FB:
                n = o("WAWebContactSystemMsg").genNonE2ENotificationMsg(
                  t,
                  "biz_privacy_mode_to_fb",
                );
                break;
              case o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode
                .HOSTED_GROUP:
                n = o("WAWebContactSystemMsg").genNonE2ENotificationMsg(
                  t,
                  "is_capi_hosted_group",
                );
                break;
            }
            if (!n) throw r("err")("Unhandled privacy mode");
            yield o("WAWebDBProcessMessage").storeMessages([n], n.id.remote);
            var i = o("WAWebMsgModelFromData").msgModelFromMsgData(n);
            (e.msgs.add(i), yield e.updateBizBotSysMsgCreated(null));
          }
        })),
        _.apply(this, arguments)
      );
    }
    l.handleBizBotAutomatedTypeTransition = e;
  },
  98,
);
