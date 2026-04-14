__d(
  "WAWebNewsletterDescriptionSection.react",
  [
    "fbt",
    "Promise",
    "WALogger",
    "WAWebActionToast.react",
    "WAWebChatGetters",
    "WAWebChatInfoDescriptionSection.react",
    "WAWebClock",
    "WAWebCmd",
    "WAWebEditNewsletterMetadataAction",
    "WAWebFbtCommon",
    "WAWebFrontendChatGetters",
    "WAWebNewsletterMembershipUtil",
    "WAWebToastManager",
    "WAWebWamEnumChannelAdminAction",
    "asyncToGeneratorRuntime",
    "err",
    "react",
    "useWAWebChatValues",
    "useWAWebEventTargetValue",
    "useWAWebListener",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useCallback,
      _ = m.useRef,
      f = m.useState;
    function g(t) {
      var a,
        i = t.chat,
        l = t.desc,
        c = l === void 0 ? "" : l,
        m = t.adminFunnelLogger,
        p = t.setIsEditing,
        _ = t.toastId,
        f = _ === void 0 ? o("WAWebActionToast.react").genId() : _;
      if (/\s/.test(c) && c.trim().length === 0)
        return (u || (u = n("Promise"))).reject(
          r("err")("Blank space channel description"),
        );
      var h = o(
          "WAWebEditNewsletterMetadataAction",
        ).editNewsletterMetadataAction(
          i,
          { editDescription: !0 },
          { description: c },
        ),
        y = (a = i.newsletterMetadata) == null ? void 0 : a.description,
        C = new (o("WAWebActionToast.react").ActionType)(
          s._(/*BTDS*/ "Changing channel description"),
        ),
        b = h
          .then(function () {
            m.logEvent(
              o("WAWebWamEnumChannelAdminAction").CHANNEL_ADMIN_ACTION
                .CHANNEL_ADMIN_FLOW_SUCCESS,
            );
            var e = y
              ? s._(/*BTDS*/ "Channel description changed")
              : s._(/*BTDS*/ "Channel description added");
            return new (o("WAWebActionToast.react").ActionType)(e, {
              actionText: r("WAWebFbtCommon")("Undo"),
              actionHandler: function () {
                return g({
                  chat: i,
                  desc: y,
                  adminFunnelLogger: m,
                  toastId: f,
                });
              },
            });
          })
          .catch(function (t) {
            return (
              m.logEvent(
                o("WAWebWamEnumChannelAdminAction").CHANNEL_ADMIN_ACTION
                  .CHANNEL_ADMIN_FLOW_FAILURE,
              ),
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "channel:handleEditDescription dropped",
                  ])),
              ),
              new (o("WAWebActionToast.react").ActionType)(
                s._(/*BTDS*/ "Channel description changed failed"),
                {
                  actionText: r("WAWebFbtCommon")("Try again"),
                  actionHandler: function () {
                    return g({
                      chat: i,
                      desc: y,
                      adminFunnelLogger: m,
                      toastId: f,
                    });
                  },
                },
              )
            );
          })
          .finally(function () {
            p && p(!1);
          });
      return (
        o("WAWebToastManager").ToastManager.open(
          d.jsx(o("WAWebActionToast.react").ActionToast, {
            id: f,
            initialAction: C,
            pendingAction: b,
          }),
        ),
        h
      );
    }
    function h(e) {
      var t = e.adminFunnelLogger,
        a = e.chat,
        i = e.focusOnMount,
        l = f(i != null ? i : !1),
        u = l[0],
        c = l[1],
        m = o("useWAWebChatValues").useChatValues(e.chat.id, [
          o("WAWebChatGetters").getId,
          o("WAWebChatGetters").getIsNewsletter,
          o("WAWebChatGetters").getId,
          o("WAWebFrontendChatGetters").getNewsletterMetadata,
        ]),
        h = m[0],
        y = m[1],
        C = m[2],
        b = o("useWAWebModelValues").useOptionalModelValues(
          a.newsletterMetadata,
          ["description", "creationTime", "membershipType"],
        ),
        v = r("useWAWebEventTargetValue")(
          b,
          ["change:description"],
          function () {
            return (b == null ? void 0 : b.description) || "";
          },
        );
      o("useWAWebListener").useListener(
        o("WAWebCmd").Cmd,
        "edit_newsletter_description",
        function () {
          c(!0);
        },
      );
      var S = f(v),
        R = S[0],
        L = S[1],
        E = _(v),
        k = p(
          function () {
            R !== E.current &&
              ((E.current = R),
              t.logEvent(
                o("WAWebWamEnumChannelAdminAction").CHANNEL_ADMIN_ACTION
                  .CHANNEL_DESCRIPTION_SET,
              ));
          },
          [t, R],
        ),
        I = p(
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, n) {
                (n === void 0 && (n = ""),
                  k(),
                  t.logEvent(
                    o("WAWebWamEnumChannelAdminAction").CHANNEL_ADMIN_ACTION
                      .CHANNEL_ADMIN_FLOW_CONFIRMATION_TAP,
                  ),
                  yield g({
                    chat: a,
                    desc: n,
                    adminFunnelLogger: t,
                    setIsEditing: c,
                  }));
              },
            );
            return function (t, n) {
              return e.apply(this, arguments);
            };
          })(),
          [a, k, t],
        );
      if (b == null) return null;
      var T = s._(/*BTDS*/ "Add channel description"),
        D = b.creationTime,
        x =
          D != null
            ? o("WAWebClock").Clock.newsletterDescriptionCreatedStr(
                b.creationTime,
              )
            : null;
      return d.jsx(r("WAWebChatInfoDescriptionSection.react"), {
        description: v,
        bulletPointsEnabled: !1,
        expandedFormattingEnabled: !1,
        chat: e.chat,
        testid: void 0,
        containerTestId: "newsletter-info-drawer-description-container",
        emptyValuePlaceholder: T,
        creationString: x,
        canSetDescription: o("WAWebNewsletterMembershipUtil").iAmAdminOrOwner(
          b,
        ),
        setDescriptionAction: I,
        onChange: L,
        onBlur: function () {
          (k(), c(!1));
        },
        setIsEditing: u,
        focusOnMount: i,
        preventBlankDescription: !0,
      });
    }
    ((h.displayName = h.name + " [from " + i.id + "]"), (l.default = h));
  },
  226,
);
