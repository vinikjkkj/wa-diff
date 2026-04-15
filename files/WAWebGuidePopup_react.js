__d(
  "WAWebGuidePopup.react",
  [
    "cx",
    "fbt",
    "$InternalEnum",
    "WAWebABProps",
    "WAWebBackIcon.react",
    "WAWebButton.react",
    "WAWebChromePermissionsIcon.react",
    "WAWebClassnames",
    "WAWebConfirmPopup.react",
    "WAWebEnvironment",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFbtCommon",
    "WAWebGuidePopupCameraAndMicrophoneFeatureSurfacePlural$FbtEnum",
    "WAWebGuidePopupCameraAndMicrophoneFeatureSurfaceSingular$FbtEnum",
    "WAWebGuidePopupCameraFeatureSurfacePlural$FbtEnum",
    "WAWebGuidePopupCameraFeatureSurfaceSingular$FbtEnum",
    "WAWebGuidePopupMicrophoneFeatureSurfacePlural$FbtEnum",
    "WAWebGuidePopupMicrophoneFeatureSurfaceSingular$FbtEnum",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebNotificationConstants",
    "WAWebUA",
    "WAWebVoipPopoutModalManager",
    "WDSIconIcLock.react",
    "WDSText.react",
    "err",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    var e = ["ref"],
      c,
      d = c || (c = o("react")),
      m = {
        NOTIFICATIONS: "NOTIFICATIONS",
        BACKGROUND_SYNC: "BACKGROUND_SYNC",
        CAMERA_FAIL: "CAMERA_FAIL",
        CAMERA_MISSING: "CAMERA_MISSING",
        MIC_FAIL: "MIC_FAIL",
        MIC_MISSING: "MIC_MISSING",
        CAMERA_AND_MIC_FAIL: "CAMERA_AND_MIC_FAIL",
        CAMERA_AND_MIC_MISSING: "CAMERA_AND_MIC_MISSING",
        CAMERA: "CAMERA",
        MIC: "MIC",
        CAMERA_AND_MIC: "CAMERA_AND_MIC",
        POPUPS_BLOCKED: "POPUPS_BLOCKED",
        SCREEN_SHARE_FAIL: "SCREEN_SHARE_FAIL",
        VIDEO_UPGRADE_FAIL: "VIDEO_UPGRADE_FAIL",
      },
      p = {
        VOICE_MESSAGES: "VOICE_MESSAGES",
        VOIP: "VOIP",
        VOIP_ACTIVE: "VOIP_ACTIVE",
      },
      _ = {
        PHOTO_CAPTURE: "PHOTO_CAPTURE",
        VOIP: "VOIP",
        VOIP_VIDEO_UPGRADE: "VOIP_VIDEO_UPGRADE",
      },
      f = { VOIP: "VOIP" },
      g = babelHelpers.extends({}, p, _, f, { NOTIFICATION: "NOTIFICATION" });
    function h(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.children,
        r;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = { className: "x1rg5ohu xk50ysn" }), (t[0] = r))
        : (r = t[0]);
      var a;
      return (
        t[1] !== n
          ? ((a = d.jsx(
              "strong",
              babelHelpers.extends({}, r, { children: n }),
            )),
            (t[1] = n),
            (t[2] = a))
          : (a = t[2]),
        a
      );
    }
    var y = n("$InternalEnum")({
      GUIDE_ALLOW: "guide-allow",
      GUIDE_UNBLOCK: "guide-unblock",
      GUIDE_NONE: "guide-none",
    });
    function C(t) {
      var n,
        a = t.ref,
        i = babelHelpers.objectWithoutPropertiesLoose(t, e),
        l = i.type,
        s = l === void 0 ? y.GUIDE_NONE : l,
        c = i.onCancel,
        m = i.onConfirm,
        p =
          m === void 0
            ? function () {
                return o("WAWebModalManager").ModalManager.close();
              }
            : m,
        _ = i.messaging,
        f = i.enableNewBannerLogic,
        g =
          _ === "NOTIFICATIONS" &&
          (f != null
            ? f
            : o("WAWebABProps").getABPropConfigValue(
                "web_notifications_banner_new_logic_enabled",
              )),
        h =
          g &&
          ((n = window.Notification) == null ? void 0 : n.permission) ===
            o("WAWebNotificationConstants").PERMISSION_DENIED;
      if (s === y.GUIDE_ALLOW) {
        var C;
        switch (o("WAWebUA").UA.browser) {
          case o("WAWebUA").BROWSER_TYPE.CHROME:
          case o("WAWebUA").BROWSER_TYPE.FIREFOX:
          case o("WAWebUA").BROWSER_TYPE.EDGE:
            C = "_al-_";
            break;
          default:
            C = "_al_0";
        }
        return d.jsx(o("WAWebModal.react").Modal, {
          type: o("WAWebModal.react").ModalTheme.Guide,
          tsNavigationData: { surface: "guide-popup", viewName: "guide-allow" },
          children: d.jsxs("div", {
            className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
              "_al_1",
              C,
            ),
            children: [
              !r("WAWebEnvironment").isWindows &&
                d.jsx("div", {
                  className: "_al_2",
                  children: d.jsx(o("WAWebBackIcon.react").BackIcon, {
                    directional: !0,
                  }),
                }),
              d.jsx("div", {
                className: "_al_3",
                children: d.jsx(b, {
                  messaging: _,
                  colorName: "persistentAlwaysWhite",
                }),
              }),
              d.jsx("div", {
                className: "_al_4",
                children: d.jsx(v, {
                  messaging: _,
                  featureSurface: i.featureSurface,
                  isNewLogicForDisabledNotifications: h,
                  colorName: "persistentAlwaysWhite",
                }),
              }),
              d.jsx("div", {
                className: "_al_5",
                children: d.jsx(o("WAWebButton.react").Button, {
                  onClick: p,
                  type: "primary",
                  children: g
                    ? r("WAWebFbtCommon")("OK")
                    : u._(/*BTDS*/ "OK, got it"),
                }),
              }),
            ],
          }),
        });
      }
      return d.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        ref: a,
        tsNavigationData: { surface: "guide-popup", viewName: "guide" },
        title: d.jsx(b, { messaging: _, colorName: "contentDefault" }),
        onOK: p,
        okText: u._(/*BTDS*/ "OK, got it"),
        onCancel: c,
        cancelText: c ? u._(/*BTDS*/ "Learn more") : void 0,
        children: d.jsx("div", {
          className: "_al_4",
          children: d.jsx(v, {
            messaging: _,
            featureSurface: i.featureSurface,
            isNewLogicForDisabledNotifications: h,
            colorName: "contentDeemphasized",
          }),
        }),
      });
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.colorName,
        a = e.messaging,
        i;
      t[0] !== a
        ? ((i =
            a === "BACKGROUND_SYNC" || a === "NOTIFICATIONS"
              ? u._(/*BTDS*/ "Allow notifications")
              : a === "CAMERA" || a === "CAMERA_FAIL"
                ? u._(/*BTDS*/ "Allow camera")
                : a === "CAMERA_MISSING"
                  ? u._(/*BTDS*/ "Camera not found")
                  : a === "MIC_MISSING"
                    ? u._(/*BTDS*/ "Microphone not found")
                    : a === "MIC_FAIL" || a === "MIC"
                      ? u._(/*BTDS*/ "Allow microphone")
                      : a === "CAMERA_AND_MIC_FAIL" || a === "CAMERA_AND_MIC"
                        ? u._(/*BTDS*/ "Allow camera and microphone")
                        : a === "CAMERA_AND_MIC_MISSING"
                          ? u._(/*BTDS*/ "Camera or microphone not found")
                          : a === "POPUPS_BLOCKED"
                            ? u._(/*BTDS*/ "Allow pop-ups")
                            : a === "SCREEN_SHARE_FAIL"
                              ? u._(
                                  /*BTDS*/ "Allow access to share your screen",
                                )
                              : a === "VIDEO_UPGRADE_FAIL"
                                ? u._(/*BTDS*/ "Couldn't switch to video")
                                : (function () {
                                    throw Error(
                                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                        a,
                                    );
                                  })()),
          (t[0] = a),
          (t[1] = i))
        : (i = t[1]);
      var l;
      return (
        t[2] !== n || t[3] !== i
          ? ((l = d.jsx(r("WDSText.react"), {
              colorName: n,
              type: "Headline2",
              children: i,
            })),
            (t[2] = n),
            (t[3] = i),
            (t[4] = l))
          : (l = t[4]),
        l
      );
    }
    function v(e) {
      var t = o("react-compiler-runtime").c(49),
        n = e.colorName,
        a = e.featureSurface,
        i = e.isNewLogicForDisabledNotifications,
        l = e.messaging,
        s = o("WAWebUA").UA.browser,
        c;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = d.jsx("div", {
            className:
              "x6s0dn4 xl56j7k x3nfvp2 xxymvpz xlup9mm x1kky2od xg5evlq xup1sw1 x1tiyuxx x1uc92m x1nbhmlj x181vq82 xt8t1vi x1xc408v x129tdwq x15urzxu x4wrhlh",
            children: d.jsx(
              o("WAWebChromePermissionsIcon.react").ChromePermissionsIcon,
              { height: 13, width: 13 },
            ),
          })),
          (t[0] = c))
        : (c = t[0]);
      var m = c,
        g;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = d.jsx("div", {
            className:
              "x7a106z xl56j7k x3nfvp2 x16dsc37 xxk0z11 xvy4d1p x1sbwfh8 x16q7b9a",
            children: d.jsx(r("WDSIconIcLock.react"), {
              height: 20,
              width: 20,
            }),
          })),
          (t[1] = g))
        : (g = t[1]);
      var y = g,
        C =
          s === "edge"
            ? y
            : s === "chrome"
              ? m
              : s === "opera"
                ? y
                : s === "firefox"
                  ? m
                  : null,
        b;
      e: switch (l) {
        case "NOTIFICATIONS": {
          if (i && C != null) {
            var v;
            t[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((v = u._(
                  /*BTDS*/ "Click the{browser_permissions_icon}icon next to the address bar and toggle {=m3} on.",
                  [
                    u._param("browser_permissions_icon", C),
                    u._implicitParam(
                      "=m3",
                      d.jsx(h, { children: u._(/*BTDS*/ "Notifications") }),
                    ),
                  ],
                )),
                (t[2] = v))
              : (v = t[2]);
            var S;
            (t[3] !== n
              ? ((S = d.jsx(r("WDSText.react"), {
                  type: "Body1",
                  colorName: n,
                  children: v,
                })),
                (t[3] = n),
                (t[4] = S))
              : (S = t[4]),
              (b = S));
            break e;
          }
          var R;
          (t[5] === Symbol.for("react.memo_cache_sentinel")
            ? ((R =
                s === "firefox"
                  ? u._(
                      /*BTDS*/ "To get notifications for new messages, select Allow from the prompt below the URL bar.",
                    )
                  : u._(
                      /*BTDS*/ "To get notifications for new messages, click Allow above.",
                    )),
              (t[5] = R))
            : (R = t[5]),
            (b = R));
          break e;
        }
        case "BACKGROUND_SYNC": {
          var L;
          (t[6] === Symbol.for("react.memo_cache_sentinel")
            ? ((L =
                s === "firefox"
                  ? u._(
                      /*BTDS*/ "To allow notifications for background sync, select Allow from the prompt below the URL bar.",
                    )
                  : u._(
                      /*BTDS*/ "To allow notifications for background sync, click Allow above.",
                    )),
              (t[6] = L))
            : (L = t[6]),
            (b = L));
          break e;
        }
        case "CAMERA_FAIL": {
          if (!(a in _))
            throw r("err")("CAMERA_FAIL: Invalid feature surface: " + a);
          if (r("WAWebEnvironment").isWindows) {
            var E;
            if (t[7] !== a) {
              var k;
              ((E =
                ((k = u._enum(
                  a,
                  r("WAWebGuidePopupCameraFeatureSurfacePlural$FbtEnum"),
                )),
                u._(
                  /*BTDS*/ '_j{"PHOTO_CAPTURE":"To take photos, WhatsApp needs access to your computer\'s camera. Please go to your privacy settings and allow camera access for this app. Click {=m5} to open the settings.","VOIP":"To make calls, WhatsApp needs access to your computer\'s camera. Please go to your privacy settings and allow camera access for this app. Click {=m5} to open the settings.","VOIP_VIDEO_UPGRADE":"To share your video, WhatsApp needs access to your computer\'s camera. Please go to your privacy settings and allow camera access for this app. Click {=m5} to open the settings."}',
                  [
                    k,
                    u._implicitParam(
                      "=m5",
                      d.jsx(o("WAWebExternalLink.react").ExternalLink, {
                        href: o("WAWebExternalLink.react").WINDOWS_SETTINGS_URIS
                          .privacy_webcam,
                        children: u._(
                          /*BTDS*/ '_j{"PHOTO_CAPTURE":"here","VOIP":"here","VOIP_VIDEO_UPGRADE":"here"}',
                          [k],
                        ),
                      }),
                    ),
                  ],
                ))),
                (t[7] = a),
                (t[8] = E));
            } else E = t[8];
            b = E;
            break e;
          }
          var I;
          if (t[9] !== a) {
            var T;
            ((I =
              s === "safari"
                ? u._(
                    /*BTDS*/ '_j{"PHOTO_CAPTURE":"To take photos, WhatsApp needs access to your computer\'s camera. Open your browser\'s Preferences \\u2192 Websites and change camera setting for web.whatsapp.com to Allow.","VOIP":"To make calls, WhatsApp needs access to your computer\'s camera. Open your browser\'s Preferences \\u2192 Websites and change camera setting for web.whatsapp.com to Allow.","VOIP_VIDEO_UPGRADE":"To share your video, WhatsApp needs access to your computer\'s camera. Open your browser\'s Preferences \\u2192 Websites and change camera setting for web.whatsapp.com to Allow."}',
                    [
                      u._enum(
                        a,
                        r("WAWebGuidePopupCameraFeatureSurfacePlural$FbtEnum"),
                      ),
                    ],
                  )
                : ((T = u._enum(
                    a,
                    r("WAWebGuidePopupCameraFeatureSurfacePlural$FbtEnum"),
                  )),
                  u._(
                    /*BTDS*/ '_j{"PHOTO_CAPTURE":"To take photos, WhatsApp needs access to your computer\'s camera. Click the{browser_permissions_icon}icon next to the address bar and toggle {=m6} on.","VOIP":"To make calls, WhatsApp needs access to your computer\'s camera. Click the{browser_permissions_icon}icon next to the address bar and toggle {=m6} on.","VOIP_VIDEO_UPGRADE":"To share your video, WhatsApp needs access to your computer\'s camera. Click the{browser_permissions_icon}icon next to the address bar and toggle {=m6} on."}',
                    [
                      T,
                      u._param("browser_permissions_icon", C),
                      u._implicitParam(
                        "=m6",
                        d.jsx(h, {
                          children: u._(
                            /*BTDS*/ '_j{"PHOTO_CAPTURE":"Camera","VOIP":"Camera","VOIP_VIDEO_UPGRADE":"Camera"}',
                            [T],
                          ),
                        }),
                      ),
                    ],
                  ))),
              (t[9] = a),
              (t[10] = I));
          } else I = t[10];
          b = I;
          break e;
        }
        case "CAMERA_MISSING": {
          if (!(a in _))
            throw r("err")("CAMERA_MISSING: Invalid feature surface: " + a);
          if (r("WAWebEnvironment").isWindows) {
            var D;
            (t[11] !== a
              ? ((D = u._(
                  /*BTDS*/ '_j{"PHOTO_CAPTURE":"You can\'t take a photo because it looks like your computer doesn\'t have a camera. Try connecting one or if you have one connected, try restarting your computer.","VOIP":"You can\'t make a call because it looks like your computer doesn\'t have a camera. Try connecting one or if you have one connected, try restarting your computer.","VOIP_VIDEO_UPGRADE":"You can\'t share your video because it looks like your computer doesn\'t have a camera. Try connecting one or if you have one connected, try restarting your computer."}',
                  [
                    u._enum(
                      a,
                      r("WAWebGuidePopupCameraFeatureSurfaceSingular$FbtEnum"),
                    ),
                  ],
                )),
                (t[11] = a),
                (t[12] = D))
              : (D = t[12]),
              (b = D));
            break e;
          }
          var x;
          (t[13] !== a
            ? ((x = u._(
                /*BTDS*/ '_j{"PHOTO_CAPTURE":"You can\'t take a photo because it looks like your computer doesn\'t have a camera. Try connecting one or if you have one connected, try restarting your browser.","VOIP":"You can\'t make a call because it looks like your computer doesn\'t have a camera. Try connecting one or if you have one connected, try restarting your browser.","VOIP_VIDEO_UPGRADE":"You can\'t share your video because it looks like your computer doesn\'t have a camera. Try connecting one or if you have one connected, try restarting your browser."}',
                [
                  u._enum(
                    a,
                    r("WAWebGuidePopupCameraFeatureSurfaceSingular$FbtEnum"),
                  ),
                ],
              )),
              (t[13] = a),
              (t[14] = x))
            : (x = t[14]),
            (b = x));
          break e;
        }
        case "MIC_FAIL": {
          if (!(a in p))
            throw r("err")("MIC_FAIL: Invalid feature surface: " + a);
          if (r("WAWebEnvironment").isWindows) {
            var $;
            if (t[15] !== a) {
              var P;
              (($ =
                ((P = u._enum(
                  a,
                  r("WAWebGuidePopupMicrophoneFeatureSurfacePlural$FbtEnum"),
                )),
                u._(
                  /*BTDS*/ '_j{"VOICE_MESSAGES":"To record voice messages, WhatsApp needs access to your computer\'s microphone. Please go to your privacy settings and allow microphone access for this app. Click {=m5} to open the settings.","VOIP":"To make calls, WhatsApp needs access to your computer\'s microphone. Please go to your privacy settings and allow microphone access for this app. Click {=m5} to open the settings.","VOIP_ACTIVE":"To continue this call, WhatsApp needs access to your computer\'s microphone. Please go to your privacy settings and allow microphone access for this app. Click {=m5} to open the settings."}',
                  [
                    P,
                    u._implicitParam(
                      "=m5",
                      d.jsx(o("WAWebExternalLink.react").ExternalLink, {
                        href: "ms-settings:privacy-microphone",
                        children: u._(
                          /*BTDS*/ '_j{"VOICE_MESSAGES":"here","VOIP":"here","VOIP_ACTIVE":"here"}',
                          [P],
                        ),
                      }),
                    ),
                  ],
                ))),
                (t[15] = a),
                (t[16] = $));
            } else $ = t[16];
            b = $;
            break e;
          }
          var N;
          if (t[17] !== a) {
            var M;
            ((N =
              s === "safari"
                ? u._(
                    /*BTDS*/ '_j{"VOICE_MESSAGES":"To record voice messages, WhatsApp needs access to your computer\'s microphone. Open your browser\'s Preferences \\u2192 Websites and change microphone setting for web.whatsapp.com to Allow.","VOIP":"To make calls, WhatsApp needs access to your computer\'s microphone. Open your browser\'s Preferences \\u2192 Websites and change microphone setting for web.whatsapp.com to Allow.","VOIP_ACTIVE":"To continue this call, WhatsApp needs access to your computer\'s microphone. Open your browser\'s Preferences \\u2192 Websites and change microphone setting for web.whatsapp.com to Allow."}',
                    [
                      u._enum(
                        a,
                        r(
                          "WAWebGuidePopupMicrophoneFeatureSurfacePlural$FbtEnum",
                        ),
                      ),
                    ],
                  )
                : ((M = u._enum(
                    a,
                    r("WAWebGuidePopupMicrophoneFeatureSurfacePlural$FbtEnum"),
                  )),
                  u._(
                    /*BTDS*/ '_j{"VOICE_MESSAGES":"To record voice messages, WhatsApp needs access to your microphone. Click the{browser_permissions_icon}icon next to the address bar and toggle {=m6} on.","VOIP":"To make calls, WhatsApp needs access to your microphone. Click the{browser_permissions_icon}icon next to the address bar and toggle {=m6} on.","VOIP_ACTIVE":"To continue this call, WhatsApp needs access to your microphone. Click the{browser_permissions_icon}icon next to the address bar and toggle {=m6} on."}',
                    [
                      M,
                      u._param("browser_permissions_icon", C),
                      u._implicitParam(
                        "=m6",
                        d.jsx(h, {
                          children: u._(
                            /*BTDS*/ '_j{"VOICE_MESSAGES":"Microphone","VOIP":"Microphone","VOIP_ACTIVE":"Microphone"}',
                            [M],
                          ),
                        }),
                      ),
                    ],
                  ))),
              (t[17] = a),
              (t[18] = N));
          } else N = t[18];
          b = N;
          break e;
        }
        case "MIC_MISSING": {
          if (!(a in p))
            throw r("err")("MIC_MISSING: Invalid feature surface: " + a);
          if (r("WAWebEnvironment").isWindows) {
            var w;
            (t[19] !== a
              ? ((w = u._(
                  /*BTDS*/ '_j{"VOICE_MESSAGES":"You can\'t record a voice message because it looks like your computer doesn\'t have a microphone. Try connecting one or if you have one connected, try restarting WhatsApp for Windows.","VOIP":"You can\'t make a call because it looks like your computer doesn\'t have a microphone. Try connecting one or if you have one connected, try restarting WhatsApp for Windows.","VOIP_ACTIVE":"You can\'t continue this call because it looks like your computer doesn\'t have a microphone. Try connecting one or if you have one connected, try restarting WhatsApp for Windows."}',
                  [
                    u._enum(
                      a,
                      r(
                        "WAWebGuidePopupMicrophoneFeatureSurfaceSingular$FbtEnum",
                      ),
                    ),
                  ],
                )),
                (t[19] = a),
                (t[20] = w))
              : (w = t[20]),
              (b = w));
            break e;
          }
          var A;
          (t[21] !== a
            ? ((A = u._(
                /*BTDS*/ '_j{"VOICE_MESSAGES":"You can\'t record a voice message because it looks like your computer doesn\'t have a microphone. Try connecting one, or if you have one connected, try restarting your browser.","VOIP":"You can\'t make a call because it looks like your computer doesn\'t have a microphone. Try connecting one, or if you have one connected, try restarting your browser.","VOIP_ACTIVE":"You can\'t continue this call because it looks like your computer doesn\'t have a microphone. Try connecting one, or if you have one connected, try restarting your browser."}',
                [
                  u._enum(
                    a,
                    r(
                      "WAWebGuidePopupMicrophoneFeatureSurfaceSingular$FbtEnum",
                    ),
                  ),
                ],
              )),
              (t[21] = a),
              (t[22] = A))
            : (A = t[22]),
            (b = A));
          break e;
        }
        case "CAMERA_AND_MIC_FAIL": {
          if (!(a in f))
            throw r("err")(
              "CAMERA_AND_MIC_FAIL: Invalid feature surface: " + a,
            );
          if (r("WAWebEnvironment").isWindows) {
            var F;
            if (t[23] !== a) {
              var O;
              ((F =
                ((O = u._enum(
                  a,
                  r(
                    "WAWebGuidePopupCameraAndMicrophoneFeatureSurfacePlural$FbtEnum",
                  ),
                )),
                u._(
                  /*BTDS*/ '_j{"VOIP":"To make calls, WhatsApp needs access to your computer\'s camera and microphone. Please go to your privacy settings and allow camera and microphone access for this app. Click {=m5} to open the settings."}',
                  [
                    O,
                    u._implicitParam(
                      "=m5",
                      d.jsx(o("WAWebExternalLink.react").ExternalLink, {
                        href: "ms-settings:privacy-microphone",
                        children: u._(/*BTDS*/ '_j{"VOIP":"here"}', [O]),
                      }),
                    ),
                  ],
                ))),
                (t[23] = a),
                (t[24] = F));
            } else F = t[24];
            b = F;
            break e;
          }
          var B;
          if (t[25] !== a) {
            var W;
            ((B =
              s === "safari"
                ? u._(
                    /*BTDS*/ '_j{"VOIP":"To make calls, WhatsApp needs access to your computer\'s camera and microphone. Open your browser\'s Preferences \\u2192 Websites and change Camera and Microphone settings for web.whatsapp.com to \\"Allow\\"."}',
                    [
                      u._enum(
                        a,
                        r(
                          "WAWebGuidePopupCameraAndMicrophoneFeatureSurfacePlural$FbtEnum",
                        ),
                      ),
                    ],
                  )
                : ((W = u._enum(
                    a,
                    r(
                      "WAWebGuidePopupCameraAndMicrophoneFeatureSurfacePlural$FbtEnum",
                    ),
                  )),
                  u._(
                    /*BTDS*/ '_j{"VOIP":"To make calls, WhatsApp needs access to your camera and microphone. Click the{browser_permissions_icon}icon next to the address bar and toggle {=m6} and {=m8} on."}',
                    [
                      W,
                      u._param("browser_permissions_icon", C),
                      u._implicitParam(
                        "=m6",
                        d.jsx(h, {
                          children: u._(/*BTDS*/ '_j{"VOIP":"Camera"}', [W]),
                        }),
                      ),
                      u._implicitParam(
                        "=m8",
                        d.jsx(h, {
                          children: u._(/*BTDS*/ '_j{"VOIP":"Microphone"}', [
                            W,
                          ]),
                        }),
                      ),
                    ],
                  ))),
              (t[25] = a),
              (t[26] = B));
          } else B = t[26];
          b = B;
          break e;
        }
        case "CAMERA_AND_MIC_MISSING": {
          if (!(a in f))
            throw r("err")("MIC_MISSING: Invalid feature surface: " + a);
          if (r("WAWebEnvironment").isWindows) {
            var q;
            (t[27] !== a
              ? ((q = u._(
                  /*BTDS*/ '_j{"VOIP":"You can\'t make a call because it looks like your computer doesn\'t have a camera or microphone. Try connecting one, or if you have one connected, try restarting WhatsApp for Windows."}',
                  [
                    u._enum(
                      a,
                      r(
                        "WAWebGuidePopupCameraAndMicrophoneFeatureSurfaceSingular$FbtEnum",
                      ),
                    ),
                  ],
                )),
                (t[27] = a),
                (t[28] = q))
              : (q = t[28]),
              (b = q));
            break e;
          }
          var U;
          (t[29] !== a
            ? ((U = u._(
                /*BTDS*/ '_j{"VOIP":"You can\'t make a call because it looks like your computer doesn\'t have a camera or microphone. Try connecting one, or if you have one connected, try restarting your browser."}',
                [
                  u._enum(
                    a,
                    r(
                      "WAWebGuidePopupCameraAndMicrophoneFeatureSurfaceSingular$FbtEnum",
                    ),
                  ),
                ],
              )),
              (t[29] = a),
              (t[30] = U))
            : (U = t[30]),
            (b = U));
          break e;
        }
        case "CAMERA": {
          if (!(a in _))
            throw r("err")("CAMERA: Invalid feature surface: " + a);
          if (r("WAWebEnvironment").isWindows) {
            var V;
            if (t[31] !== a) {
              var H;
              ((V =
                ((H = u._enum(
                  a,
                  r("WAWebGuidePopupCameraFeatureSurfacePlural$FbtEnum"),
                )),
                u._(
                  /*BTDS*/ '_j{"PHOTO_CAPTURE":"To take photos, WhatsApp needs access to your computer\'s camera. Please go to your privacy settings and allow camera access for this app. Click {=m5} to open the settings.","VOIP":"To make calls, WhatsApp needs access to your computer\'s camera. Please go to your privacy settings and allow camera access for this app. Click {=m5} to open the settings.","VOIP_VIDEO_UPGRADE":"To share your video, WhatsApp needs access to your computer\'s camera. Please go to your privacy settings and allow camera access for this app. Click {=m5} to open the settings."}',
                  [
                    H,
                    u._implicitParam(
                      "=m5",
                      d.jsx(o("WAWebExternalLink.react").ExternalLink, {
                        href: o("WAWebExternalLink.react").WINDOWS_SETTINGS_URIS
                          .privacy_webcam,
                        children: u._(
                          /*BTDS*/ '_j{"PHOTO_CAPTURE":"here","VOIP":"here","VOIP_VIDEO_UPGRADE":"here"}',
                          [H],
                        ),
                      }),
                    ),
                  ],
                ))),
                (t[31] = a),
                (t[32] = V));
            } else V = t[32];
            b = V;
            break e;
          }
          var G;
          (t[33] !== a
            ? ((G = u._(
                /*BTDS*/ '_j{"PHOTO_CAPTURE":"To take photos, click Allow above to give WhatsApp access to your computer\'s camera.","VOIP":"To make calls, click Allow above to give WhatsApp access to your computer\'s camera.","VOIP_VIDEO_UPGRADE":"To share your video, click Allow above to give WhatsApp access to your computer\'s camera."}',
                [
                  u._enum(
                    a,
                    r("WAWebGuidePopupCameraFeatureSurfacePlural$FbtEnum"),
                  ),
                ],
              )),
              (t[33] = a),
              (t[34] = G))
            : (G = t[34]),
            (b = G));
          break e;
        }
        case "MIC": {
          if (!(a in p)) throw r("err")("MIC: Invalid feature surface: " + a);
          if (r("WAWebEnvironment").isWindows) {
            var z;
            (t[35] !== a
              ? ((z = u._(
                  /*BTDS*/ '_j{"VOICE_MESSAGES":"To record voice messages, click \\"Yes\\" to let WhatsApp access your computer\'s microphone.","VOIP":"To make calls, click \\"Yes\\" to let WhatsApp access your computer\'s microphone.","VOIP_ACTIVE":"To continue this call, click \\"Yes\\" to let WhatsApp access your computer\'s microphone."}',
                  [
                    u._enum(
                      a,
                      r(
                        "WAWebGuidePopupMicrophoneFeatureSurfacePlural$FbtEnum",
                      ),
                    ),
                  ],
                )),
                (t[35] = a),
                (t[36] = z))
              : (z = t[36]),
              (b = z));
            break e;
          }
          var j;
          (t[37] !== a
            ? ((j = u._(
                /*BTDS*/ '_j{"VOICE_MESSAGES":"To record voice messages, click Allow above to give WhatsApp access to your computer\'s microphone.","VOIP":"To make calls, click Allow above to give WhatsApp access to your computer\'s microphone.","VOIP_ACTIVE":"To continue this call, click Allow above to give WhatsApp access to your computer\'s microphone."}',
                [
                  u._enum(
                    a,
                    r("WAWebGuidePopupMicrophoneFeatureSurfacePlural$FbtEnum"),
                  ),
                ],
              )),
              (t[37] = a),
              (t[38] = j))
            : (j = t[38]),
            (b = j));
          break e;
        }
        case "CAMERA_AND_MIC": {
          if (!(a in f))
            throw r("err")("CAMERA_AND_MIC: Invalid feature surface: " + a);
          if (r("WAWebEnvironment").isWindows) {
            var K;
            if (t[39] !== a) {
              var Q;
              ((K =
                ((Q = u._enum(
                  a,
                  r(
                    "WAWebGuidePopupCameraAndMicrophoneFeatureSurfacePlural$FbtEnum",
                  ),
                )),
                u._(
                  /*BTDS*/ '_j{"VOIP":"To make calls, WhatsApp needs access to your computer\'s camera and microphone. Please go to your privacy settings and allow camera and microphone access for this app. Click {=m5} to open the settings."}',
                  [
                    Q,
                    u._implicitParam(
                      "=m5",
                      d.jsx(o("WAWebExternalLink.react").ExternalLink, {
                        href: o("WAWebExternalLink.react").WINDOWS_SETTINGS_URIS
                          .privacy_webcam,
                        children: u._(/*BTDS*/ '_j{"VOIP":"here"}', [Q]),
                      }),
                    ),
                  ],
                ))),
                (t[39] = a),
                (t[40] = K));
            } else K = t[40];
            b = K;
            break e;
          }
          var X;
          (t[41] !== a
            ? ((X = u._(
                /*BTDS*/ '_j{"VOIP":"To make calls, click \\"Allow\\" above to give WhatsApp access to your computer\'s camera and microphone."}',
                [
                  u._enum(
                    a,
                    r(
                      "WAWebGuidePopupCameraAndMicrophoneFeatureSurfacePlural$FbtEnum",
                    ),
                  ),
                ],
              )),
              (t[41] = a),
              (t[42] = X))
            : (X = t[42]),
            (b = X));
          break e;
        }
        case "POPUPS_BLOCKED": {
          var Y;
          (t[43] === Symbol.for("react.memo_cache_sentinel")
            ? ((Y =
                s === "safari"
                  ? u._(
                      /*BTDS*/ "To open calls in a separate window, allow pop-ups for this site in your browser's preferences \u2192 websites \u2192 pop-up windows.",
                    )
                  : u._(
                      /*BTDS*/ "To open calls in a separate window, allow pop-ups for this site in your browser settings.",
                    )),
              (t[43] = Y))
            : (Y = t[43]),
            (b = Y));
          break e;
        }
        case "SCREEN_SHARE_FAIL": {
          var J;
          (t[44] === Symbol.for("react.memo_cache_sentinel")
            ? ((J =
                s === "safari"
                  ? u._(
                      /*BTDS*/ "To share your screen, allow WhatsApp access to screen sharing in Safari settings. In the menu bar, navigate to Safari \u2192 Settings \u2192 Websites \u2192 Screen Sharing and allow WhatsApp. You can also try restarting Safari.",
                    )
                  : u._(
                      /*BTDS*/ "To share your screen, allow WhatsApp access to screen sharing in your browser settings.",
                    )),
              (t[44] = J))
            : (J = t[44]),
            (b = J));
          break e;
        }
        case "VIDEO_UPGRADE_FAIL": {
          var Z;
          (t[45] === Symbol.for("react.memo_cache_sentinel")
            ? ((Z = u._(
                /*BTDS*/ "Something went wrong while switching to video. Please try again.",
              )),
              (t[45] = Z))
            : (Z = t[45]),
            (b = Z));
          break e;
        }
        default:
          throw r("err")("Invalid messaging type: " + l);
      }
      var ee;
      return (
        t[46] !== n || t[47] !== b
          ? ((ee = d.jsx(r("WDSText.react"), {
              colorName: n,
              type: "Body2",
              children: b,
            })),
            (t[46] = n),
            (t[47] = b),
            (t[48] = ee))
          : (ee = t[48]),
        ee
      );
    }
    function S() {
      (o("WAWebModalManager").ModalManager.close(),
        o("WAWebVoipPopoutModalManager").VoipPopoutModalManager.close());
    }
    function R() {
      switch (o("WAWebUA").UA.browser) {
        case o("WAWebUA").BROWSER_TYPE.CHROME:
          return o("WAWebExternalLink.react").openExternalLink(
            o("WAWebFaqUrl").getNotificationChromeFaqUrl(),
          );
        case o("WAWebUA").BROWSER_TYPE.FIREFOX:
          return o("WAWebExternalLink.react").openExternalLink(
            o("WAWebFaqUrl").getNotificationFirefoxFaqUrl(),
          );
        case o("WAWebUA").BROWSER_TYPE.SAFARI:
          return o("WAWebExternalLink.react").openExternalLink(
            o("WAWebFaqUrl").getNotificationSafariFaqUrl(),
          );
        case o("WAWebUA").BROWSER_TYPE.OPERA:
          return o("WAWebExternalLink.react").openExternalLink(
            o("WAWebFaqUrl").getNotificationOperaFaqUrl(),
          );
        case o("WAWebUA").BROWSER_TYPE.EDGE:
          return o("WAWebExternalLink.react").openExternalLink(
            o("WAWebFaqUrl").getNotificationEdgeFaqUrl(),
          );
        default:
          return o("WAWebExternalLink.react").openExternalLink(
            o("WAWebFaqUrl").getNotificationChromeFaqUrl(),
          );
      }
    }
    ((l.Messaging = m),
      (l.MicrophoneFeatureSurface = p),
      (l.CameraFeatureSurface = _),
      (l.CameraAndMicrophoneFeatureSurface = f),
      (l.FeatureSurface = g),
      (l.GuidePopupType = y),
      (l.GuidePopup = C),
      (l.guideConfirm = S),
      (l.notificationGuideLearnMore = R));
  },
  226,
);
