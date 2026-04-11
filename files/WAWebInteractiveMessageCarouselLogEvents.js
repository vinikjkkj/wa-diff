__d(
  "WAWebInteractiveMessageCarouselLogEvents",
  [
    "WALogger",
    "WAWebInteractiveMessageHeaderMediaType",
    "WAWebMsgCollection",
    "WAWebPaidMessagingUserInteractionsLoggerWamEvent",
    "WAWebWamEnumPaidMessagingUserInteractionsActionTarget",
    "WAWebWamEnumPaidMessagingUserInteractionsActionType",
    "WAWebWamEnumPaidMessagingUserInteractionsComponentType",
    "WAWebWamEnumPaidMessagingUserInteractionsHeaderMediaType",
    "WAWebWamEnumPaidMessagingUserInteractionsMarketingFormat",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    function m(e, t) {
      v(e, t) &&
        new (o(
          "WAWebPaidMessagingUserInteractionsLoggerWamEvent",
        ).PaidMessagingUserInteractionsLoggerWamEvent)(
          babelHelpers.extends({}, h(e, { duration_ms: t }), {
            pmxActionType: o(
              "WAWebWamEnumPaidMessagingUserInteractionsActionType",
            ).PAID_MESSAGING_USER_INTERACTIONS_ACTION_TYPE.VIEW,
            pmxComponentType: o(
              "WAWebWamEnumPaidMessagingUserInteractionsComponentType",
            ).PAID_MESSAGING_USER_INTERACTIONS_COMPONENT_TYPE.NONE,
          }),
        ).commit();
    }
    function p(e, t) {
      if (v(e, t)) {
        var n = y(e, { duration_ms: t });
        n != null &&
          new (o(
            "WAWebPaidMessagingUserInteractionsLoggerWamEvent",
          ).PaidMessagingUserInteractionsLoggerWamEvent)(
            babelHelpers.extends({}, n, {
              pmxActionType: o(
                "WAWebWamEnumPaidMessagingUserInteractionsActionType",
              ).PAID_MESSAGING_USER_INTERACTIONS_ACTION_TYPE.VIEW,
              pmxComponentType: o(
                "WAWebWamEnumPaidMessagingUserInteractionsComponentType",
              ).PAID_MESSAGING_USER_INTERACTIONS_COMPONENT_TYPE.NONE,
            }),
          ).commit();
      }
    }
    function _(e) {
      new (o(
        "WAWebPaidMessagingUserInteractionsLoggerWamEvent",
      ).PaidMessagingUserInteractionsLoggerWamEvent)(
        babelHelpers.extends(
          {
            pmxComponentType: o(
              "WAWebWamEnumPaidMessagingUserInteractionsComponentType",
            ).PAID_MESSAGING_USER_INTERACTIONS_COMPONENT_TYPE.HEADER,
            pmxActionTarget: o(
              "WAWebWamEnumPaidMessagingUserInteractionsActionTarget",
            ).PAID_MESSAGING_USER_INTERACTIONS_ACTION_TARGET.THUMBNAIL,
            pmxActionType: o(
              "WAWebWamEnumPaidMessagingUserInteractionsActionType",
            ).PAID_MESSAGING_USER_INTERACTIONS_ACTION_TYPE.CLICK,
          },
          y(e),
        ),
      ).commit();
    }
    function f(e) {
      new (o(
        "WAWebPaidMessagingUserInteractionsLoggerWamEvent",
      ).PaidMessagingUserInteractionsLoggerWamEvent)(
        babelHelpers.extends(
          {
            pmxComponentType: o(
              "WAWebWamEnumPaidMessagingUserInteractionsComponentType",
            ).PAID_MESSAGING_USER_INTERACTIONS_COMPONENT_TYPE.HEADER,
            pmxActionTarget: o(
              "WAWebWamEnumPaidMessagingUserInteractionsActionTarget",
            ).PAID_MESSAGING_USER_INTERACTIONS_ACTION_TARGET.HEADER,
            pmxActionType: o(
              "WAWebWamEnumPaidMessagingUserInteractionsActionType",
            ).PAID_MESSAGING_USER_INTERACTIONS_ACTION_TYPE.CLICK,
          },
          y(e),
        ),
      ).commit();
    }
    function g(e, t, n) {
      new (o(
        "WAWebPaidMessagingUserInteractionsLoggerWamEvent",
      ).PaidMessagingUserInteractionsLoggerWamEvent)(
        babelHelpers.extends(
          {
            pmxComponentType: o(
              "WAWebWamEnumPaidMessagingUserInteractionsComponentType",
            ).PAID_MESSAGING_USER_INTERACTIONS_COMPONENT_TYPE.BUTTON,
            pmxActionTarget: t,
            pmxActionType: o(
              "WAWebWamEnumPaidMessagingUserInteractionsActionType",
            ).PAID_MESSAGING_USER_INTERACTIONS_ACTION_TYPE.CLICK,
          },
          y(e, { button_index: n }),
        ),
      ).commit();
    }
    function h(t, n) {
      var r,
        a = t.carouselCards;
      if (a == null)
        return (
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[buildBasicLoggingArgsFromCarouselMsg] carouselCards null",
              ])),
          ),
          null
        );
      var i = a.head();
      if (i == null)
        return (
          o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[buildBasicLoggingArgsFromCarouselMsg] head() empty",
              ])),
          ),
          null
        );
      var l = C(i);
      return l == null
        ? null
        : {
            pmxMarketingFormat: o(
              "WAWebWamEnumPaidMessagingUserInteractionsMarketingFormat",
            ).PAID_MESSAGING_USER_INTERACTIONS_MARKETING_FORMAT.CAROUSEL,
            pmxHeaderMediaType: l,
            pmxQueryParams: JSON.stringify(
              babelHelpers.extends({}, n, { num_cards: a.length }),
            ),
            templateId: (r = t.templateId) != null ? r : "",
          };
    }
    function y(e, t) {
      var n = e.parentMsgId;
      if (n == null)
        return (
          o("WALogger").WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[buildBasicLoggingArgsFromCarouselCard] parentMsgId null",
              ])),
          ),
          null
        );
      var r = o("WAWebMsgCollection").MsgCollection.get(n.toString());
      if (r == null) return null;
      var a = r.carouselCards;
      if (a == null)
        return (
          o("WALogger").WARN(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[buildBasicLoggingArgsFromCarouselCard] carouselCards null",
              ])),
          ),
          null
        );
      var i = a.slice();
      return h(
        r,
        babelHelpers.extends({}, t, {
          card_index: i.findIndex(function (t) {
            return t.id.toString() === e.id.toString();
          }),
        }),
      );
    }
    function C(e) {
      var t,
        n = (t = e.interactiveHeader) == null ? void 0 : t.mediaType;
      if (n == null)
        return (
          o("WALogger").WARN(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[getHeaderFromCarouselCard] mediaType null",
              ])),
          ),
          null
        );
      switch (n) {
        case o("WAWebInteractiveMessageHeaderMediaType")
          .InteractiveMessageHeaderMediaType.IMAGE:
          return o("WAWebWamEnumPaidMessagingUserInteractionsHeaderMediaType")
            .PAID_MESSAGING_USER_INTERACTIONS_HEADER_MEDIA_TYPE.IMAGE;
        case o("WAWebInteractiveMessageHeaderMediaType")
          .InteractiveMessageHeaderMediaType.VIDEO:
          return o("WAWebWamEnumPaidMessagingUserInteractionsHeaderMediaType")
            .PAID_MESSAGING_USER_INTERACTIONS_HEADER_MEDIA_TYPE.VIDEO;
        case o("WAWebInteractiveMessageHeaderMediaType")
          .InteractiveMessageHeaderMediaType.DOCUMENT:
          return o("WAWebWamEnumPaidMessagingUserInteractionsHeaderMediaType")
            .PAID_MESSAGING_USER_INTERACTIONS_HEADER_MEDIA_TYPE.DOCUMENT;
        case o("WAWebInteractiveMessageHeaderMediaType")
          .InteractiveMessageHeaderMediaType.PRODUCT:
          return o("WAWebWamEnumPaidMessagingUserInteractionsHeaderMediaType")
            .PAID_MESSAGING_USER_INTERACTIONS_HEADER_MEDIA_TYPE.IMAGE;
      }
    }
    var b = {};
    function v(e, t) {
      var n = e.id.toString();
      return b[n] != null && b[n] > t ? !1 : ((b[n] = t), !0);
    }
    ((l.logViewCarousel = m),
      (l.logViewCarouselCard = p),
      (l.logCarouselCardClickToDownload = _),
      (l.logCarouselCardClickToView = f),
      (l.logCarouselCardClickCTA = g));
  },
  98,
);
