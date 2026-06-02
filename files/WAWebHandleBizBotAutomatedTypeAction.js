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
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t, n) {
      var r = o("WAWebChatCollection").ChatCollection.get(e);
      if (r && !o("WAWebBotUtils").isMetaAiBot(e)) {
        var a = t;
        if (!a) {
          var i,
            l = await o("WAWebApiBusinessProfile").getBusinessProfileRow(
              e.toString(),
            );
          a =
            (i = o("WAWebBotTypes").BizBotAutomatedType.cast(
              l == null ? void 0 : l.automatedType,
            )) != null
              ? i
              : o("WAWebBotTypes").BizBotAutomatedType.UNKNOWN;
        }
        var d = n != null ? n : o("WAWebBotTypes").BizBotAutomatedType.UNKNOWN;
        a !== d &&
          (a === o("WAWebBotTypes").BizBotAutomatedType.UNKNOWN &&
          d === o("WAWebBotTypes").BizBotAutomatedType.PARTIAL_1P
            ? await s(r)
            : a === o("WAWebBotTypes").BizBotAutomatedType.UNKNOWN &&
                d === o("WAWebBotTypes").BizBotAutomatedType.FULL_3P
              ? await u(r)
              : a === o("WAWebBotTypes").BizBotAutomatedType.FULL_3P &&
                d === o("WAWebBotTypes").BizBotAutomatedType.UNKNOWN &&
                (await c(r)));
      }
    }
    async function s(e) {
      if (
        !(
          !o("WAWebBotTos").hasAcceptedBizBotTos() ||
          e.bizBotSystemMsgType === o("WAWebBotTypes").BizBotType.BIZ_1P
        )
      ) {
        var t = o("WAWebBotSystemMsg").genBizBot1pDisclosureMessage(e.id);
        if (
          (await o("WAWebDBProcessMessage").storeMessages([t], t.id.remote),
          o("WAWebBotBaseGating").isBizBot1pEnabled())
        ) {
          var n = o("WAWebMsgModelFromData").msgModelFromMsgData(t);
          e.msgs.add(n);
        }
        await e.updateBizBotSysMsgCreated(o("WAWebBotTypes").BizBotType.BIZ_1P);
      }
    }
    async function u(e) {
      if (
        !(
          !o("WAWebBotTos").hasAcceptedBizBotTos() ||
          e.bizBotSystemMsgType === o("WAWebBotTypes").BizBotType.BIZ_3P
        )
      ) {
        var t = o("WAWebBotSystemMsg").genBizBot3pDisclosureMessage(e.id);
        await o("WAWebDBProcessMessage").storeMessages([t], t.id.remote);
        var n = o("WAWebMsgModelFromData").msgModelFromMsgData(t);
        (e.msgs.add(n),
          await e.updateBizBotSysMsgCreated(
            o("WAWebBotTypes").BizBotType.BIZ_3P,
          ));
      }
    }
    async function c(e) {
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
          case o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.HOSTED_GROUP:
            n = o("WAWebContactSystemMsg").genNonE2ENotificationMsg(
              t,
              "is_capi_hosted_group",
            );
            break;
        }
        if (!n) throw r("err")("Unhandled privacy mode");
        await o("WAWebDBProcessMessage").storeMessages([n], n.id.remote);
        var i = o("WAWebMsgModelFromData").msgModelFromMsgData(n);
        (e.msgs.add(i), await e.updateBizBotSysMsgCreated(null));
      }
    }
    l.handleBizBotAutomatedTypeTransition = e;
  },
  98,
);
