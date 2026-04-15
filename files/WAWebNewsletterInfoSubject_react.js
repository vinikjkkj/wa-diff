__d(
  "WAWebNewsletterInfoSubject.react",
  [
    "fbt",
    "WALogger",
    "WAWebActionToast.react",
    "WAWebEditNewsletterMetadataAction",
    "WAWebFbtCommon",
    "WAWebGroupInfoSubjectInput.react",
    "WAWebName.react",
    "WAWebNewsletterMembershipUtil",
    "WAWebToastManager",
    "WAWebWamEnumChannelAdminAction",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useCallback,
      p = d.useRef,
      _ = d.useState;
    function f(t, n, a, i) {
      i === void 0 && (i = o("WAWebActionToast.react").genId());
      var l = o(
          "WAWebEditNewsletterMetadataAction",
        ).editNewsletterMetadataAction(t, { editName: !0 }, { name: n }),
        u = t.name,
        d = new (o("WAWebActionToast.react").ActionType)(
          s._(/*BTDS*/ "Renaming channel"),
        ),
        m = l
          .then(function () {
            return (
              a.logEvent(
                o("WAWebWamEnumChannelAdminAction").CHANNEL_ADMIN_ACTION
                  .CHANNEL_ADMIN_FLOW_SUCCESS,
              ),
              new (o("WAWebActionToast.react").ActionType)(
                s._(/*BTDS*/ "Channel renamed to {name}", [
                  s._param("name", n),
                ]),
                {
                  actionText: r("WAWebFbtCommon")("Undo"),
                  actionHandler: function () {
                    return f(t, u, a, i);
                  },
                },
              )
            );
          })
          .catch(function (l) {
            return (
              a.logEvent(
                o("WAWebWamEnumChannelAdminAction").CHANNEL_ADMIN_ACTION
                  .CHANNEL_ADMIN_FLOW_FAILURE,
              ),
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "newsletter:handleEditSubject dropped",
                  ])),
              ),
              new (o("WAWebActionToast.react").ActionType)(
                s._(/*BTDS*/ "Couldn't rename channel"),
                {
                  actionText: r("WAWebFbtCommon")("Try again"),
                  actionHandler: function () {
                    return f(t, n, a, i);
                  },
                },
              )
            );
          });
      return (
        o("WAWebToastManager").ToastManager.open(
          c.jsx(o("WAWebActionToast.react").ActionToast, {
            id: i,
            initialAction: d,
            pendingAction: m,
          }),
        ),
        l
      );
    }
    function g(e) {
      var t = o("react-compiler-runtime").c(18),
        a = e.adminFunnelLogger,
        i = e.chat,
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = [
            "name",
            "membershipType",
            "isSuspendedOrTerminated",
            "verified",
          ]),
          (t[0] = l))
        : (l = t[0]);
      var u = o("useWAWebModelValues").useOptionalModelValues(
          i.newsletterMetadata,
          l,
        ),
        d = _(i.formattedTitle),
        m = d[0],
        g = d[1],
        h = p(i.formattedTitle),
        y;
      t[1] !== a || t[2] !== m
        ? ((y = function () {
            m !== h.current &&
              ((h.current = m),
              a.logEvent(
                o("WAWebWamEnumChannelAdminAction").CHANNEL_ADMIN_ACTION
                  .CHANNEL_NAME_SET,
              ));
          }),
          (t[1] = a),
          (t[2] = m),
          (t[3] = y))
        : (y = t[3]);
      var C = y,
        b;
      t[4] !== a || t[5] !== i || t[6] !== C
        ? ((b = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                (C(),
                  e !== i.formattedTitle &&
                    (a.logEvent(
                      o("WAWebWamEnumChannelAdminAction").CHANNEL_ADMIN_ACTION
                        .CHANNEL_ADMIN_FLOW_CONFIRMATION_TAP,
                    ),
                    yield f(i, e, a)));
              },
            );
            return function (n) {
              return e.apply(this, arguments);
            };
          })()),
          (t[4] = a),
          (t[5] = i),
          (t[6] = C),
          (t[7] = b))
        : (b = t[7]);
      var v = b;
      if (u == null) return null;
      if (
        u.isSuspendedOrTerminated === !0 ||
        !o("WAWebNewsletterMembershipUtil").iAmAdminOrOwner(u)
      ) {
        var S;
        return (
          t[8] !== i
            ? ((S = c.jsx(r("WDSText.react"), {
                type: "Headline1",
                colorName: "contentDefault",
                textAlign: "center",
                children: c.jsx(o("WAWebName.react").Name, {
                  chat: i,
                  breakWord: !0,
                  checkmarkLarge: !0,
                  selectable: !0,
                }),
              })),
              (t[8] = i),
              (t[9] = S))
            : (S = t[9]),
          S
        );
      }
      var R;
      t[10] !== u
        ? ((R =
            o("WAWebNewsletterMembershipUtil").iAmAdminOrOwner(u) &&
            u.isSuspendedOrTerminated !== !0),
          (t[10] = u),
          (t[11] = R))
        : (R = t[11]);
      var L;
      t[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = s._(/*BTDS*/ "Channel name can't be empty")), (t[12] = L))
        : (L = t[12]);
      var E;
      return (
        t[13] !== i.formattedTitle || t[14] !== C || t[15] !== v || t[16] !== R
          ? ((E = c.jsx(r("WAWebGroupInfoSubjectInput.react"), {
              subject: i.formattedTitle,
              onSave: v,
              editRestrictionInfo: void 0,
              editable: R,
              emptyErrorMessage: L,
              onChange: g,
              onBlur: C,
              direction: "ltr",
            })),
            (t[13] = i.formattedTitle),
            (t[14] = C),
            (t[15] = v),
            (t[16] = R),
            (t[17] = E))
          : (E = t[17]),
        E
      );
    }
    l.default = g;
  },
  226,
);
