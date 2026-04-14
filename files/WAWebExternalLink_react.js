__d(
  "WAWebExternalLink.react",
  [
    "$InternalEnum",
    "WALogger",
    "WAUnicodeUtils",
    "WAWebClassnames",
    "WAWebConstantsDeprecated",
    "WAWebKeyboardIsKeyActivation",
    "WAWebURLUtils",
    "WDSFocusStateStyles",
    "isStringNullOrEmpty",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = ["href"],
      c = ["className", "dataTab", "dir", "rel", "target"],
      d,
      m,
      p = m || (m = o("react")),
      _ = m,
      f = _.memo,
      g = _.useRef,
      h = /\u2066|\u2067|\u2068|\u2069|\u202A|\u202B|\u202C|\u202D|\u202E/g,
      y = {
        hoverUnderline: {
          fontWeight: "x1xlr1w8",
          ":hover_textDecoration": "xt0b8zv",
          ":focus-visible_textDecoration": "xbvygy2",
          ":focus-visible_color": "x17f7hit",
          ":focus-visible_backgroundColor": "xp30eni",
          ":focus-visible_textUnderlineOffset": "xhmieyt",
          $$css: !0,
        },
      };
    function C(e) {
      var t = g(),
        n = function (n) {
          if (r("WAWebKeyboardIsKeyActivation")(n)) {
            var e;
            (e = t.current) == null || e.click();
          }
        },
        a = e["aria-label"],
        i = e.children,
        l = e.className,
        s = e["data-tab"],
        u = e.href,
        c = e.isLongTemplateUrl,
        m = e.onClick,
        _ = e.tabIndex,
        f = e.testid,
        h = e.xstyle,
        C = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          l,
          (d || (d = r("stylex")))(y.hoverUnderline, h),
        );
      return c
        ? p.jsxs(b, {
            ref: t,
            className: C,
            href: u,
            onClick: m,
            onKeyDown: n,
            "data-tab": s,
            tabIndex: _,
            "aria-label": a,
            children: [
              o("WAUnicodeUtils").substring(
                u,
                0,
                r("WAWebConstantsDeprecated").TEMPLATE_URL_START,
              ),
              p.jsx("span", { children: "\u2026" }),
              o("WAUnicodeUtils").substring(
                u,
                u.length - r("WAWebConstantsDeprecated").TEMPLATE_URL_END,
                u.length,
              ),
            ],
          })
        : p.jsx(b, {
            ref: t,
            className: C,
            href: u,
            onClick: m,
            onKeyDown: n,
            "data-testid": void 0,
            "data-tab": s,
            tabIndex: _,
            "aria-label": a,
            children: i,
          });
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(t) {
      var n = t.href,
        a = babelHelpers.objectWithoutPropertiesLoose(t, u),
        i = a.className,
        l = a.dataTab,
        s = a.dir,
        m = a.rel,
        _ = a.target,
        f = babelHelpers.objectWithoutPropertiesLoose(a, c);
      if (
        !r("isStringNullOrEmpty")(n) &&
        !N.includes(n) &&
        !r("WAWebURLUtils").hasValidUrlScheme(n)
      )
        return (
          n.toLowerCase().startsWith("javascript:") &&
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Bad url: ",
                    "",
                  ])),
                n,
              )
              .sendLogs("URL error"),
          null
        );
      var g = n != null ? n.replaceAll(h, "") : null;
      return p.jsx(
        "a",
        babelHelpers.extends(
          {
            tabIndex: l != null ? 0 : void 0,
            "data-tab": l,
            href: g,
            target: "_blank",
            rel: "noopener noreferrer",
            dir: "ltr",
            className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
              i,
              (d || (d = r("stylex")))(
                o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
              ),
            ),
          },
          f,
        ),
      );
    }
    b.displayName = b.name + " [from " + i.id + "]";
    var v = f(C),
      S = {
        qr_slim_banner:
          "https://get.microsoft.com/installer/download/9NKSQGP7F2NH?cid=qr_slim_banner",
        qr_large_banner:
          "https://get.microsoft.com/installer/download/9NKSQGP7F2NH?cid=qr_large_banner",
        link_device_banner_3:
          "https://get.microsoft.com/installer/download/9NKSQGP7F2NH?cid=link_device_banner",
        intro_panel:
          "https://get.microsoft.com/installer/download/9NKSQGP7F2NH?cid=intro_panel",
        chatlist_toastbar:
          "https://get.microsoft.com/installer/download/9NKSQGP7F2NH?cid=chatlist_toastbar",
        search_results_toastbar:
          "https://get.microsoft.com/installer/download/9NKSQGP7F2NH?cid=search_results_toastbar",
        call_btn_modal_2:
          "https://get.microsoft.com/installer/download/9NKSQGP7F2NH?cid=call_btn_modal",
        chatlist_dropdown_menu:
          "https://get.microsoft.com/installer/download/9NKSQGP7F2NH?cid=chatlist_dropdown_menu",
        missed_call_modal_2:
          "https://get.microsoft.com/installer/download/9NKSQGP7F2NH?cid=missed_call_modal",
        microphone_settings: "ms-settings:privacy-microphone",
      },
      R = {
        qr_slim_banner:
          "ms-windows-store://pdp/?productid=9NKSQGP7F2NH&mode=mini&cid=qr_slim_banner",
        qr_large_banner:
          "ms-windows-store://pdp/?productid=9NKSQGP7F2NH&mode=mini&cid=qr_large_banner",
        link_device_banner_3:
          "ms-windows-store://pdp/?productid=9NKSQGP7F2NH&mode=mini&cid=a0269b",
        intro_panel:
          "ms-windows-store://pdp/?productid=9NKSQGP7F2NH&mode=mini&cid=68a40a",
        chatlist_toastbar:
          "ms-windows-store://pdp/?productid=9NKSQGP7F2NH&mode=mini&cid=dea681",
        search_results_toastbar:
          "ms-windows-store://pdp/?productid=9NKSQGP7F2NH&mode=mini&cid=586f03",
        call_btn_modal_2:
          "ms-windows-store://pdp/?productid=9NKSQGP7F2NH&mode=mini&cid=1f9c76",
        chatlist_dropdown_menu:
          "ms-windows-store://pdp/?productid=9NKSQGP7F2NH&mode=mini&cid=cc3981",
        missed_call_modal_2:
          "ms-windows-store://pdp/?productid=9NKSQGP7F2NH&mode=mini&cid=5721b2",
      },
      L = {
        microphone_settings: "ms-settings:privacy-microphone",
        startup_apps: "ms-settings:startupapps",
        windows_update: "ms-settings:windowsupdate",
        privacy_webcam: "ms-settings:privacy-webcam",
      },
      E = {
        qr_slim_banner:
          "itms-apps://apps.apple.com/app/id310633997?pt=217218&ct=web2mac_qr_slim_banner&mt=8",
        qr_large_banner:
          "itms-apps://apps.apple.com/app/id310633997?pt=217218&ct=web2mac_qr_large_banner&mt=8",
        link_device_banner_3:
          "itms-apps://apps.apple.com/app/id310633997?pt=217218&ct=web2mac_linking_screen_refresh&mt=8",
        intro_panel:
          "itms-apps://apps.apple.com/app/id310633997?pt=217218&ct=web2mac_empty_state&mt=8",
        chatlist_toastbar:
          "itms-apps://apps.apple.com/app/id310633997?pt=217218&ct=web2mac_chat_overflow&mt=8",
        search_results_toastbar:
          "itms-apps://apps.apple.com/app/id310633997?pt=217218&ct=web2mac_search&mt=8",
        call_btn_modal_2:
          "itms-apps://apps.apple.com/app/id310633997?pt=217218&ct=web2mac_call_button&mt=8",
        chatlist_dropdown_menu:
          "itms-apps://apps.apple.com/app/id310633997?pt=217218&ct=web2mac_chat_inbox&mt=8",
        missed_call_modal_2:
          "itms-apps://apps.apple.com/app/id310633997?pt=217218&ct=web2mac_missed_call&mt=8",
      },
      k = {
        touchscreen_overlay:
          "itms-apps://apps.apple.com/app/id310633997?pt=217218&ct=web2ios_touchscreen_overlay&mt=8",
      },
      I = "munki://detail-WhatsAppCatalyst.html",
      T = "https://dev-web.whatsapp.com/desktop/mac_native/release/",
      D = "https://whatsapp.com/download/?start_mac_download=1",
      x = "https://web.whatsapp.com",
      $ = "whatsapp://send/",
      P =
        "https://web.whatsapp.com/desktop/mac_native/release/?configuration=Beta&branch=master",
      N = [].concat(
        Object.values(S),
        Object.values(R),
        Object.values(L),
        Object.values(E),
        Object.values(k),
        [I, T, D, x, $, P],
      ),
      M = !1;
    function w() {
      return M;
    }
    var A = n("$InternalEnum").Mirrored([
      "NEW_TAB",
      "CURRENT_TAB",
      "DEEPLINK_IN_CURRENT_TAB",
    ]);
    function F(e, t) {
      if (!N.includes(e) && !r("WAWebURLUtils").hasValidUrlScheme(e)) {
        e.toLowerCase().startsWith("javascript:") &&
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "Bad url: ",
                  "",
                ])),
              e,
            )
            .sendLogs("URL error");
        return;
      }
      var n = t != null ? t : {},
        a = n.target,
        i = a === void 0 ? A.NEW_TAB : a,
        l = document.createElement("a");
      ((l.href = e),
        i === A.NEW_TAB
          ? (l.target = "_blank")
          : i === A.CURRENT_TAB
            ? (l.target = "_self")
            : i === A.DEEPLINK_IN_CURRENT_TAB && (M = !0),
        (t == null ? void 0 : t.allowReferrer) !== !0 &&
          (l.rel = "noopener noreferrer"),
        (l.style.display = "none"),
        document.body && document.body.appendChild(l),
        l.click(),
        document.body && document.body.removeChild(l),
        i === A.DEEPLINK_IN_CURRENT_TAB &&
          self.setTimeout(function () {
            M = !1;
          }, 1e3));
    }
    ((l.ExternalLinkEl = b),
      (l.ExternalLink = v),
      (l.WINDOWS_SIDELOAD_URIS = S),
      (l.WINDOWS_SETTINGS_URIS = L),
      (l.MAC_STORE_URIS = E),
      (l.IOS_STORE_URIS = k),
      (l.MAC_INTERNAL_MSC_STORE_URI = I),
      (l.MAC_EXTERNAL_SIDELOAD_URI_BETA = P),
      (l.isOpeningDeeplinkInCurrentTab = w),
      (l.ExternalLinkTarget = A),
      (l.openExternalLink = F));
  },
  98,
);
