__d(
  "WAWebNewsletterInfoPhoto.react",
  [
    "fbt",
    "WALogger",
    "WAWebActionToast.react",
    "WAWebEditNewsletterMetadataAction",
    "WAWebFbtCommon",
    "WAWebPhotoPickerConstants",
    "WAWebPhotoPickerLoadable.react",
    "WAWebToastManager",
    "WAWebWamEnumChannelAdminAction",
    "react",
    "stylex",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useCallback,
      _ = m.useState;
    function f(t, n, a, i) {
      i === void 0 && (i = o("WAWebActionToast.react").genId());
      var l = o(
          "WAWebEditNewsletterMetadataAction",
        ).editNewsletterMetadataAction(
          t,
          { editPicture: !0 },
          { picture: n != null ? n : null },
        ),
        u = new (o("WAWebActionToast.react").ActionType)(
          n != null
            ? s._(/*BTDS*/ "Setting channel icon")
            : s._(/*BTDS*/ "Removing channel icon"),
        ),
        c = l
          .then(function () {
            return (
              a.logEvent(
                o("WAWebWamEnumChannelAdminAction").CHANNEL_ADMIN_ACTION
                  .CHANNEL_ADMIN_FLOW_SUCCESS,
              ),
              new (o("WAWebActionToast.react").ActionType)(
                n != null
                  ? s._(/*BTDS*/ "Channel icon set")
                  : s._(/*BTDS*/ "Channel icon removed"),
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
                    "newsletter:handleEditPhoto dropped",
                  ])),
              ),
              new (o("WAWebActionToast.react").ActionType)(
                n != null
                  ? s._(/*BTDS*/ "Couldn't set channel icon")
                  : s._(/*BTDS*/ "Couldn't remove channel icon"),
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
          d.jsx(o("WAWebActionToast.react").ActionToast, {
            id: i,
            initialAction: u,
            pendingAction: c,
          }),
        ),
        l
      );
    }
    function g(e) {
      var t = e.HoverIcon,
        n = e.adminFunnelLogger,
        a = e.chat,
        i = e.readOnly,
        l = e.showAddIconOverlay,
        s = l === void 0 ? !0 : l,
        c = e.showOutline,
        m = e.size,
        g = e.testId,
        h = e.xstyle,
        y = _(!1),
        C = y[0],
        b = y[1],
        v = o("useWAWebModelValues").useModelValues(a.contact, [
          "id",
          "profilePicThumb",
        ]),
        S = o("useWAWebModelValues").useOptionalModelValues(
          a.contact.profilePicThumb,
          ["imgFull"],
        ),
        R = p(
          function (e, t, r) {
            (n.logImageSetEvent(r),
              n.logEvent(
                o("WAWebWamEnumChannelAdminAction").CHANNEL_ADMIN_ACTION
                  .CHANNEL_ADMIN_FLOW_CONFIRMATION_TAP,
              ),
              b(!0),
              f(a, t, n).finally(function () {
                b(!1);
              }));
          },
          [a, n],
        );
      return d.jsx(
        "div",
        babelHelpers.extends({}, (u || (u = r("stylex"))).props(h), {
          children: d.jsx(
            o("WAWebPhotoPickerLoadable.react").PhotoPickerLoadable,
            {
              testid: void 0,
              type: o("WAWebPhotoPickerConstants").PhotoPickerType.NEWSLETTER,
              id: v.id,
              attachToChat: !0,
              startImage: S == null ? void 0 : S.imgFull,
              readOnly: i,
              onImageSet: R,
              pending: C,
              HoverIcon: t,
              showAddIconOverlay: s,
              size: m,
              showOutline: c,
            },
          ),
        }),
      );
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = g));
  },
  226,
);
