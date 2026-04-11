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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(21),
        n = e.HoverIcon,
        a = e.adminFunnelLogger,
        i = e.chat,
        l = e.readOnly,
        s = e.showAddIconOverlay,
        c = e.showOutline,
        m = e.size,
        p = e.testId,
        g = e.xstyle,
        h = s === void 0 ? !0 : s,
        y = _(!1),
        C = y[0],
        b = y[1],
        v;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = ["id", "profilePicThumb"]), (t[0] = v))
        : (v = t[0]);
      var S = o("useWAWebModelValues").useModelValues(i.contact, v),
        R;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = ["imgFull"]), (t[1] = R))
        : (R = t[1]);
      var L = o("useWAWebModelValues").useOptionalModelValues(
          i.contact.profilePicThumb,
          R,
        ),
        E;
      t[2] !== a || t[3] !== i
        ? ((E = function (t, n, r) {
            (a.logImageSetEvent(r),
              a.logEvent(
                o("WAWebWamEnumChannelAdminAction").CHANNEL_ADMIN_ACTION
                  .CHANNEL_ADMIN_FLOW_CONFIRMATION_TAP,
              ),
              b(!0),
              f(i, n, a).finally(function () {
                b(!1);
              }));
          }),
          (t[2] = a),
          (t[3] = i),
          (t[4] = E))
        : (E = t[4]);
      var k = E,
        I;
      t[5] !== g
        ? ((I = (u || (u = r("stylex"))).props(g)), (t[5] = g), (t[6] = I))
        : (I = t[6]);
      var T = p != null ? p : "newsletter-photo-picker",
        D = L == null ? void 0 : L.imgFull,
        x;
      t[7] !== n ||
      t[8] !== S.id ||
      t[9] !== k ||
      t[10] !== C ||
      t[11] !== l ||
      t[12] !== h ||
      t[13] !== c ||
      t[14] !== m ||
      t[15] !== T ||
      t[16] !== D
        ? ((x = d.jsx(o("WAWebPhotoPickerLoadable.react").PhotoPickerLoadable, {
            testid: void 0,
            type: o("WAWebPhotoPickerConstants").PhotoPickerType.NEWSLETTER,
            id: S.id,
            attachToChat: !0,
            startImage: D,
            readOnly: l,
            onImageSet: k,
            pending: C,
            HoverIcon: n,
            showAddIconOverlay: h,
            size: m,
            showOutline: c,
          })),
          (t[7] = n),
          (t[8] = S.id),
          (t[9] = k),
          (t[10] = C),
          (t[11] = l),
          (t[12] = h),
          (t[13] = c),
          (t[14] = m),
          (t[15] = T),
          (t[16] = D),
          (t[17] = x))
        : (x = t[17]);
      var $;
      return (
        t[18] !== I || t[19] !== x
          ? (($ = d.jsx("div", babelHelpers.extends({}, I, { children: x }))),
            (t[18] = I),
            (t[19] = x),
            (t[20] = $))
          : ($ = t[20]),
        $
      );
    }
    l.default = g;
  },
  226,
);
