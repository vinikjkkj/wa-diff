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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(30),
        a = e.adminFunnelLogger,
        i = e.chat,
        l = e.focusOnMount,
        u = f(l != null ? l : !1),
        c = u[0],
        m = u[1],
        p;
      (t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = [
            o("WAWebChatGetters").getId,
            o("WAWebChatGetters").getIsNewsletter,
            o("WAWebChatGetters").getId,
            o("WAWebFrontendChatGetters").getNewsletterMetadata,
          ]),
          (t[0] = p))
        : (p = t[0]),
        o("useWAWebChatValues").useChatValues(e.chat.id, p));
      var h;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = ["description", "creationTime", "membershipType"]), (t[1] = h))
        : (h = t[1]);
      var y = o("useWAWebModelValues").useOptionalModelValues(
          i.newsletterMetadata,
          h,
        ),
        C;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = ["change:description"]), (t[2] = C))
        : (C = t[2]);
      var b;
      t[3] !== (y == null ? void 0 : y.description)
        ? ((b = function () {
            return (y == null ? void 0 : y.description) || "";
          }),
          (t[3] = y == null ? void 0 : y.description),
          (t[4] = b))
        : (b = t[4]);
      var v = r("useWAWebEventTargetValue")(y, C, b),
        S;
      (t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = function () {
            m(!0);
          }),
          (t[5] = S))
        : (S = t[5]),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "edit_newsletter_description",
          S,
        ));
      var R = f(v),
        L = R[0],
        E = R[1],
        k = _(v),
        I;
      t[6] !== a || t[7] !== L
        ? ((I = function () {
            L !== k.current &&
              ((k.current = L),
              a.logEvent(
                o("WAWebWamEnumChannelAdminAction").CHANNEL_ADMIN_ACTION
                  .CHANNEL_DESCRIPTION_SET,
              ));
          }),
          (t[6] = a),
          (t[7] = L),
          (t[8] = I))
        : (I = t[8]);
      var T = I,
        D;
      t[9] !== a || t[10] !== i || t[11] !== T
        ? ((D = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n = t === void 0 ? "" : t;
                (T(),
                  a.logEvent(
                    o("WAWebWamEnumChannelAdminAction").CHANNEL_ADMIN_ACTION
                      .CHANNEL_ADMIN_FLOW_CONFIRMATION_TAP,
                  ),
                  yield g({
                    chat: i,
                    desc: n,
                    adminFunnelLogger: a,
                    setIsEditing: m,
                  }));
              },
            );
            return function (n, r) {
              return e.apply(this, arguments);
            };
          })()),
          (t[9] = a),
          (t[10] = i),
          (t[11] = T),
          (t[12] = D))
        : (D = t[12]);
      var x = D;
      if (y == null) return null;
      var $;
      t[13] === Symbol.for("react.memo_cache_sentinel")
        ? (($ = s._(/*BTDS*/ "Add channel description")), (t[13] = $))
        : ($ = t[13]);
      var P = $,
        N = y.creationTime,
        M;
      t[14] !== N || t[15] !== y.creationTime
        ? ((M =
            N != null
              ? o("WAWebClock").Clock.newsletterDescriptionCreatedStr(
                  y.creationTime,
                )
              : null),
          (t[14] = N),
          (t[15] = y.creationTime),
          (t[16] = M))
        : (M = t[16]);
      var w = M,
        A = e.chat,
        F;
      t[17] !== y
        ? ((F = o("WAWebNewsletterMembershipUtil").iAmAdminOrOwner(y)),
          (t[17] = y),
          (t[18] = F))
        : (F = t[18]);
      var O;
      t[19] !== T
        ? ((O = function () {
            (T(), m(!1));
          }),
          (t[19] = T),
          (t[20] = O))
        : (O = t[20]);
      var B;
      return (
        t[21] !== w ||
        t[22] !== v ||
        t[23] !== l ||
        t[24] !== x ||
        t[25] !== c ||
        t[26] !== e.chat ||
        t[27] !== F ||
        t[28] !== O
          ? ((B = d.jsx(r("WAWebChatInfoDescriptionSection.react"), {
              description: v,
              bulletPointsEnabled: !1,
              expandedFormattingEnabled: !1,
              chat: A,
              testid: void 0,
              containerTestId: "newsletter-info-drawer-description-container",
              emptyValuePlaceholder: P,
              creationString: w,
              canSetDescription: F,
              setDescriptionAction: x,
              onChange: E,
              onBlur: O,
              setIsEditing: c,
              focusOnMount: l,
              preventBlankDescription: !0,
            })),
            (t[21] = w),
            (t[22] = v),
            (t[23] = l),
            (t[24] = x),
            (t[25] = c),
            (t[26] = e.chat),
            (t[27] = F),
            (t[28] = O),
            (t[29] = B))
          : (B = t[29]),
        B
      );
    }
    l.default = h;
  },
  226,
);
