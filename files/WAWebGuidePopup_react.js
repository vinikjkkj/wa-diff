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
      var t = e.children;
      return d.jsx("strong", { className: "x1rg5ohu xk50ysn", children: t });
    }
    h.displayName = h.name + " [from " + i.id + "]";
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
      var t = e.colorName,
        n = e.messaging;
      return d.jsx(r("WDSText.react"), {
        colorName: t,
        type: "Headline2",
        children:
          n === "BACKGROUND_SYNC" || n === "NOTIFICATIONS"
            ? u._(/*BTDS*/ "Allow notifications")
            : n === "CAMERA" || n === "CAMERA_FAIL"
              ? u._(/*BTDS*/ "Allow camera")
              : n === "CAMERA_MISSING"
                ? u._(/*BTDS*/ "Camera not found")
                : n === "MIC_MISSING"
                  ? u._(/*BTDS*/ "Microphone not found")
                  : n === "MIC_FAIL" || n === "MIC"
                    ? u._(/*BTDS*/ "Allow microphone")
                    : n === "CAMERA_AND_MIC_FAIL" || n === "CAMERA_AND_MIC"
                      ? u._(/*BTDS*/ "Allow camera and microphone")
                      : n === "CAMERA_AND_MIC_MISSING"
                        ? u._(/*BTDS*/ "Camera or microphone not found")
                        : n === "POPUPS_BLOCKED"
                          ? u._(/*BTDS*/ "Allow pop-ups")
                          : n === "SCREEN_SHARE_FAIL"
                            ? u._(/*BTDS*/ "Allow access to share your screen")
                            : n === "VIDEO_UPGRADE_FAIL"
                              ? u._(/*BTDS*/ "Couldn't switch to video")
                              : (function () {
                                  throw Error(
                                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                      n,
                                  );
                                })(),
      });
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v(e) {
      var t,
        n,
        a,
        i = e.colorName,
        l = e.featureSurface,
        s = e.isNewLogicForDisabledNotifications,
        c = e.messaging,
        m = o("WAWebUA").UA.browser,
        g = d.jsx("div", {
          className:
            "x6s0dn4 xl56j7k x3nfvp2 xxymvpz xlup9mm x1kky2od xg5evlq xup1sw1 x1tiyuxx x1uc92m x1nbhmlj x181vq82 xt8t1vi x1xc408v x129tdwq x15urzxu x4wrhlh",
          children: d.jsx(
            o("WAWebChromePermissionsIcon.react").ChromePermissionsIcon,
            { height: 13, width: 13 },
          ),
        }),
        y = d.jsx("div", {
          className:
            "x7a106z xl56j7k x3nfvp2 x16dsc37 xxk0z11 xvy4d1p x1sbwfh8 x16q7b9a",
          children: d.jsx(r("WDSIconIcLock.react"), { height: 20, width: 20 }),
        }),
        C =
          m === "edge"
            ? y
            : m === "chrome"
              ? g
              : m === "opera"
                ? y
                : m === "firefox"
                  ? g
                  : null,
        b;
      switch (c) {
        case "NOTIFICATIONS": {
          if (s && C != null) {
            b = d.jsx(r("WDSText.react"), {
              type: "Body1",
              colorName: i,
              children: u._(
                /*BTDS*/ "Click the{browser_permissions_icon}icon next to the address bar and toggle {=m3} on.",
                [
                  u._param("browser_permissions_icon", C),
                  u._implicitParam(
                    "=m3",
                    d.jsx(h, { children: u._(/*BTDS*/ "Notifications") }),
                  ),
                ],
              ),
            });
            break;
          }
          b =
            m === "firefox"
              ? u._(
                  /*BTDS*/ "To get notifications for new messages, select Allow from the prompt below the URL bar.",
                )
              : u._(
                  /*BTDS*/ "To get notifications for new messages, click Allow above.",
                );
          break;
        }
        case "BACKGROUND_SYNC":
          b =
            m === "firefox"
              ? u._(
                  /*BTDS*/ "To allow notifications for background sync, select Allow from the prompt below the URL bar.",
                )
              : u._(
                  /*BTDS*/ "To allow notifications for background sync, click Allow above.",
                );
          break;
        case "CAMERA_FAIL":
          if (!(l in _))
            throw r("err")("CAMERA_FAIL: Invalid feature surface: " + l);
          if (r("WAWebEnvironment").isWindows) {
            var v;
            b =
              ((v = u._enum(
                l,
                r("WAWebGuidePopupCameraFeatureSurfacePlural$FbtEnum"),
              )),
              u._(
                /*BTDS*/ '_j{"PHOTO_CAPTURE":"To take photos, WhatsApp needs access to your computer\'s camera. Please go to your privacy settings and allow camera access for this app. Click {=m5} to open the settings.","VOIP":"To make calls, WhatsApp needs access to your computer\'s camera. Please go to your privacy settings and allow camera access for this app. Click {=m5} to open the settings.","VOIP_VIDEO_UPGRADE":"To share your video, WhatsApp needs access to your computer\'s camera. Please go to your privacy settings and allow camera access for this app. Click {=m5} to open the settings."}',
                [
                  v,
                  u._implicitParam(
                    "=m5",
                    d.jsx(o("WAWebExternalLink.react").ExternalLink, {
                      href: o("WAWebExternalLink.react").WINDOWS_SETTINGS_URIS
                        .privacy_webcam,
                      children: u._(
                        /*BTDS*/ '_j{"PHOTO_CAPTURE":"here","VOIP":"here","VOIP_VIDEO_UPGRADE":"here"}',
                        [v],
                      ),
                    }),
                  ),
                ],
              ));
            break;
          }
          b =
            m === "safari"
              ? u._(
                  /*BTDS*/ '_j{"PHOTO_CAPTURE":"To take photos, WhatsApp needs access to your computer\'s camera. Open your browser\'s Preferences \\u2192 Websites and change camera setting for web.whatsapp.com to Allow.","VOIP":"To make calls, WhatsApp needs access to your computer\'s camera. Open your browser\'s Preferences \\u2192 Websites and change camera setting for web.whatsapp.com to Allow.","VOIP_VIDEO_UPGRADE":"To share your video, WhatsApp needs access to your computer\'s camera. Open your browser\'s Preferences \\u2192 Websites and change camera setting for web.whatsapp.com to Allow."}',
                  [
                    u._enum(
                      l,
                      r("WAWebGuidePopupCameraFeatureSurfacePlural$FbtEnum"),
                    ),
                  ],
                )
              : ((a = u._enum(
                  l,
                  r("WAWebGuidePopupCameraFeatureSurfacePlural$FbtEnum"),
                )),
                u._(
                  /*BTDS*/ '_j{"PHOTO_CAPTURE":"To take photos, WhatsApp needs access to your computer\'s camera. Click the{browser_permissions_icon}icon next to the address bar and toggle {=m6} on.","VOIP":"To make calls, WhatsApp needs access to your computer\'s camera. Click the{browser_permissions_icon}icon next to the address bar and toggle {=m6} on.","VOIP_VIDEO_UPGRADE":"To share your video, WhatsApp needs access to your computer\'s camera. Click the{browser_permissions_icon}icon next to the address bar and toggle {=m6} on."}',
                  [
                    a,
                    u._param("browser_permissions_icon", C),
                    u._implicitParam(
                      "=m6",
                      d.jsx(h, {
                        children: u._(
                          /*BTDS*/ '_j{"PHOTO_CAPTURE":"Camera","VOIP":"Camera","VOIP_VIDEO_UPGRADE":"Camera"}',
                          [a],
                        ),
                      }),
                    ),
                  ],
                ));
          break;
        case "CAMERA_MISSING":
          if (!(l in _))
            throw r("err")("CAMERA_MISSING: Invalid feature surface: " + l);
          if (r("WAWebEnvironment").isWindows) {
            b = u._(
              /*BTDS*/ '_j{"PHOTO_CAPTURE":"You can\'t take a photo because it looks like your computer doesn\'t have a camera. Try connecting one or if you have one connected, try restarting your computer.","VOIP":"You can\'t make a call because it looks like your computer doesn\'t have a camera. Try connecting one or if you have one connected, try restarting your computer.","VOIP_VIDEO_UPGRADE":"You can\'t share your video because it looks like your computer doesn\'t have a camera. Try connecting one or if you have one connected, try restarting your computer."}',
              [
                u._enum(
                  l,
                  r("WAWebGuidePopupCameraFeatureSurfaceSingular$FbtEnum"),
                ),
              ],
            );
            break;
          }
          b = u._(
            /*BTDS*/ '_j{"PHOTO_CAPTURE":"You can\'t take a photo because it looks like your computer doesn\'t have a camera. Try connecting one or if you have one connected, try restarting your browser.","VOIP":"You can\'t make a call because it looks like your computer doesn\'t have a camera. Try connecting one or if you have one connected, try restarting your browser.","VOIP_VIDEO_UPGRADE":"You can\'t share your video because it looks like your computer doesn\'t have a camera. Try connecting one or if you have one connected, try restarting your browser."}',
            [
              u._enum(
                l,
                r("WAWebGuidePopupCameraFeatureSurfaceSingular$FbtEnum"),
              ),
            ],
          );
          break;
        case "MIC_FAIL":
          if (!(l in p))
            throw r("err")("MIC_FAIL: Invalid feature surface: " + l);
          if (r("WAWebEnvironment").isWindows) {
            var a;
            b =
              ((a = u._enum(
                l,
                r("WAWebGuidePopupMicrophoneFeatureSurfacePlural$FbtEnum"),
              )),
              u._(
                /*BTDS*/ '_j{"VOICE_MESSAGES":"To record voice messages, WhatsApp needs access to your computer\'s microphone. Please go to your privacy settings and allow microphone access for this app. Click {=m5} to open the settings.","VOIP":"To make calls, WhatsApp needs access to your computer\'s microphone. Please go to your privacy settings and allow microphone access for this app. Click {=m5} to open the settings.","VOIP_ACTIVE":"To continue this call, WhatsApp needs access to your computer\'s microphone. Please go to your privacy settings and allow microphone access for this app. Click {=m5} to open the settings."}',
                [
                  a,
                  u._implicitParam(
                    "=m5",
                    d.jsx(o("WAWebExternalLink.react").ExternalLink, {
                      href: "ms-settings:privacy-microphone",
                      children: u._(
                        /*BTDS*/ '_j{"VOICE_MESSAGES":"here","VOIP":"here","VOIP_ACTIVE":"here"}',
                        [a],
                      ),
                    }),
                  ),
                ],
              ));
            break;
          }
          b =
            m === "safari"
              ? u._(
                  /*BTDS*/ '_j{"VOICE_MESSAGES":"To record voice messages, WhatsApp needs access to your computer\'s microphone. Open your browser\'s Preferences \\u2192 Websites and change microphone setting for web.whatsapp.com to Allow.","VOIP":"To make calls, WhatsApp needs access to your computer\'s microphone. Open your browser\'s Preferences \\u2192 Websites and change microphone setting for web.whatsapp.com to Allow.","VOIP_ACTIVE":"To continue this call, WhatsApp needs access to your computer\'s microphone. Open your browser\'s Preferences \\u2192 Websites and change microphone setting for web.whatsapp.com to Allow."}',
                  [
                    u._enum(
                      l,
                      r(
                        "WAWebGuidePopupMicrophoneFeatureSurfacePlural$FbtEnum",
                      ),
                    ),
                  ],
                )
              : ((n = u._enum(
                  l,
                  r("WAWebGuidePopupMicrophoneFeatureSurfacePlural$FbtEnum"),
                )),
                u._(
                  /*BTDS*/ '_j{"VOICE_MESSAGES":"To record voice messages, WhatsApp needs access to your microphone. Click the{browser_permissions_icon}icon next to the address bar and toggle {=m6} on.","VOIP":"To make calls, WhatsApp needs access to your microphone. Click the{browser_permissions_icon}icon next to the address bar and toggle {=m6} on.","VOIP_ACTIVE":"To continue this call, WhatsApp needs access to your microphone. Click the{browser_permissions_icon}icon next to the address bar and toggle {=m6} on."}',
                  [
                    n,
                    u._param("browser_permissions_icon", C),
                    u._implicitParam(
                      "=m6",
                      d.jsx(h, {
                        children: u._(
                          /*BTDS*/ '_j{"VOICE_MESSAGES":"Microphone","VOIP":"Microphone","VOIP_ACTIVE":"Microphone"}',
                          [n],
                        ),
                      }),
                    ),
                  ],
                ));
          break;
        case "MIC_MISSING":
          if (!(l in p))
            throw r("err")("MIC_MISSING: Invalid feature surface: " + l);
          if (r("WAWebEnvironment").isWindows) {
            b = u._(
              /*BTDS*/ '_j{"VOICE_MESSAGES":"You can\'t record a voice message because it looks like your computer doesn\'t have a microphone. Try connecting one or if you have one connected, try restarting WhatsApp for Windows.","VOIP":"You can\'t make a call because it looks like your computer doesn\'t have a microphone. Try connecting one or if you have one connected, try restarting WhatsApp for Windows.","VOIP_ACTIVE":"You can\'t continue this call because it looks like your computer doesn\'t have a microphone. Try connecting one or if you have one connected, try restarting WhatsApp for Windows."}',
              [
                u._enum(
                  l,
                  r("WAWebGuidePopupMicrophoneFeatureSurfaceSingular$FbtEnum"),
                ),
              ],
            );
            break;
          }
          b = u._(
            /*BTDS*/ '_j{"VOICE_MESSAGES":"You can\'t record a voice message because it looks like your computer doesn\'t have a microphone. Try connecting one, or if you have one connected, try restarting your browser.","VOIP":"You can\'t make a call because it looks like your computer doesn\'t have a microphone. Try connecting one, or if you have one connected, try restarting your browser.","VOIP_ACTIVE":"You can\'t continue this call because it looks like your computer doesn\'t have a microphone. Try connecting one, or if you have one connected, try restarting your browser."}',
            [
              u._enum(
                l,
                r("WAWebGuidePopupMicrophoneFeatureSurfaceSingular$FbtEnum"),
              ),
            ],
          );
          break;
        case "CAMERA_AND_MIC_FAIL":
          if (!(l in f))
            throw r("err")(
              "CAMERA_AND_MIC_FAIL: Invalid feature surface: " + l,
            );
          if (r("WAWebEnvironment").isWindows) {
            var n;
            b =
              ((n = u._enum(
                l,
                r(
                  "WAWebGuidePopupCameraAndMicrophoneFeatureSurfacePlural$FbtEnum",
                ),
              )),
              u._(
                /*BTDS*/ '_j{"VOIP":"To make calls, WhatsApp needs access to your computer\'s camera and microphone. Please go to your privacy settings and allow camera and microphone access for this app. Click {=m5} to open the settings."}',
                [
                  n,
                  u._implicitParam(
                    "=m5",
                    d.jsx(o("WAWebExternalLink.react").ExternalLink, {
                      href: "ms-settings:privacy-microphone",
                      children: u._(/*BTDS*/ '_j{"VOIP":"here"}', [n]),
                    }),
                  ),
                ],
              ));
            break;
          }
          b =
            m === "safari"
              ? u._(
                  /*BTDS*/ '_j{"VOIP":"To make calls, WhatsApp needs access to your computer\'s camera and microphone. Open your browser\'s Preferences \\u2192 Websites and change Camera and Microphone settings for web.whatsapp.com to \\"Allow\\"."}',
                  [
                    u._enum(
                      l,
                      r(
                        "WAWebGuidePopupCameraAndMicrophoneFeatureSurfacePlural$FbtEnum",
                      ),
                    ),
                  ],
                )
              : ((t = u._enum(
                  l,
                  r(
                    "WAWebGuidePopupCameraAndMicrophoneFeatureSurfacePlural$FbtEnum",
                  ),
                )),
                u._(
                  /*BTDS*/ '_j{"VOIP":"To make calls, WhatsApp needs access to your camera and microphone. Click the{browser_permissions_icon}icon next to the address bar and toggle {=m6} and {=m8} on."}',
                  [
                    t,
                    u._param("browser_permissions_icon", C),
                    u._implicitParam(
                      "=m6",
                      d.jsx(h, {
                        children: u._(/*BTDS*/ '_j{"VOIP":"Camera"}', [t]),
                      }),
                    ),
                    u._implicitParam(
                      "=m8",
                      d.jsx(h, {
                        children: u._(/*BTDS*/ '_j{"VOIP":"Microphone"}', [t]),
                      }),
                    ),
                  ],
                ));
          break;
        case "CAMERA_AND_MIC_MISSING":
          if (!(l in f))
            throw r("err")("MIC_MISSING: Invalid feature surface: " + l);
          if (r("WAWebEnvironment").isWindows) {
            b = u._(
              /*BTDS*/ '_j{"VOIP":"You can\'t make a call because it looks like your computer doesn\'t have a camera or microphone. Try connecting one, or if you have one connected, try restarting WhatsApp for Windows."}',
              [
                u._enum(
                  l,
                  r(
                    "WAWebGuidePopupCameraAndMicrophoneFeatureSurfaceSingular$FbtEnum",
                  ),
                ),
              ],
            );
            break;
          }
          b = u._(
            /*BTDS*/ '_j{"VOIP":"You can\'t make a call because it looks like your computer doesn\'t have a camera or microphone. Try connecting one, or if you have one connected, try restarting your browser."}',
            [
              u._enum(
                l,
                r(
                  "WAWebGuidePopupCameraAndMicrophoneFeatureSurfaceSingular$FbtEnum",
                ),
              ),
            ],
          );
          break;
        case "CAMERA":
          if (!(l in _))
            throw r("err")("CAMERA: Invalid feature surface: " + l);
          if (r("WAWebEnvironment").isWindows) {
            var t;
            b =
              ((t = u._enum(
                l,
                r("WAWebGuidePopupCameraFeatureSurfacePlural$FbtEnum"),
              )),
              u._(
                /*BTDS*/ '_j{"PHOTO_CAPTURE":"To take photos, WhatsApp needs access to your computer\'s camera. Please go to your privacy settings and allow camera access for this app. Click {=m5} to open the settings.","VOIP":"To make calls, WhatsApp needs access to your computer\'s camera. Please go to your privacy settings and allow camera access for this app. Click {=m5} to open the settings.","VOIP_VIDEO_UPGRADE":"To share your video, WhatsApp needs access to your computer\'s camera. Please go to your privacy settings and allow camera access for this app. Click {=m5} to open the settings."}',
                [
                  t,
                  u._implicitParam(
                    "=m5",
                    d.jsx(o("WAWebExternalLink.react").ExternalLink, {
                      href: o("WAWebExternalLink.react").WINDOWS_SETTINGS_URIS
                        .privacy_webcam,
                      children: u._(
                        /*BTDS*/ '_j{"PHOTO_CAPTURE":"here","VOIP":"here","VOIP_VIDEO_UPGRADE":"here"}',
                        [t],
                      ),
                    }),
                  ),
                ],
              ));
            break;
          }
          b = u._(
            /*BTDS*/ '_j{"PHOTO_CAPTURE":"To take photos, click Allow above to give WhatsApp access to your computer\'s camera.","VOIP":"To make calls, click Allow above to give WhatsApp access to your computer\'s camera.","VOIP_VIDEO_UPGRADE":"To share your video, click Allow above to give WhatsApp access to your computer\'s camera."}',
            [
              u._enum(
                l,
                r("WAWebGuidePopupCameraFeatureSurfacePlural$FbtEnum"),
              ),
            ],
          );
          break;
        case "MIC":
          if (!(l in p)) throw r("err")("MIC: Invalid feature surface: " + l);
          if (r("WAWebEnvironment").isWindows) {
            b = u._(
              /*BTDS*/ '_j{"VOICE_MESSAGES":"To record voice messages, click \\"Yes\\" to let WhatsApp access your computer\'s microphone.","VOIP":"To make calls, click \\"Yes\\" to let WhatsApp access your computer\'s microphone.","VOIP_ACTIVE":"To continue this call, click \\"Yes\\" to let WhatsApp access your computer\'s microphone."}',
              [
                u._enum(
                  l,
                  r("WAWebGuidePopupMicrophoneFeatureSurfacePlural$FbtEnum"),
                ),
              ],
            );
            break;
          }
          b = u._(
            /*BTDS*/ '_j{"VOICE_MESSAGES":"To record voice messages, click Allow above to give WhatsApp access to your computer\'s microphone.","VOIP":"To make calls, click Allow above to give WhatsApp access to your computer\'s microphone.","VOIP_ACTIVE":"To continue this call, click Allow above to give WhatsApp access to your computer\'s microphone."}',
            [
              u._enum(
                l,
                r("WAWebGuidePopupMicrophoneFeatureSurfacePlural$FbtEnum"),
              ),
            ],
          );
          break;
        case "CAMERA_AND_MIC":
          if (!(l in f))
            throw r("err")("CAMERA_AND_MIC: Invalid feature surface: " + l);
          if (r("WAWebEnvironment").isWindows) {
            var S;
            b =
              ((S = u._enum(
                l,
                r(
                  "WAWebGuidePopupCameraAndMicrophoneFeatureSurfacePlural$FbtEnum",
                ),
              )),
              u._(
                /*BTDS*/ '_j{"VOIP":"To make calls, WhatsApp needs access to your computer\'s camera and microphone. Please go to your privacy settings and allow camera and microphone access for this app. Click {=m5} to open the settings."}',
                [
                  S,
                  u._implicitParam(
                    "=m5",
                    d.jsx(o("WAWebExternalLink.react").ExternalLink, {
                      href: o("WAWebExternalLink.react").WINDOWS_SETTINGS_URIS
                        .privacy_webcam,
                      children: u._(/*BTDS*/ '_j{"VOIP":"here"}', [S]),
                    }),
                  ),
                ],
              ));
            break;
          }
          b = u._(
            /*BTDS*/ '_j{"VOIP":"To make calls, click \\"Allow\\" above to give WhatsApp access to your computer\'s camera and microphone."}',
            [
              u._enum(
                l,
                r(
                  "WAWebGuidePopupCameraAndMicrophoneFeatureSurfacePlural$FbtEnum",
                ),
              ),
            ],
          );
          break;
        case "POPUPS_BLOCKED":
          b =
            m === "safari"
              ? u._(
                  /*BTDS*/ "To open calls in a separate window, allow pop-ups for this site in your browser's preferences \u2192 websites \u2192 pop-up windows.",
                )
              : u._(
                  /*BTDS*/ "To open calls in a separate window, allow pop-ups for this site in your browser settings.",
                );
          break;
        case "SCREEN_SHARE_FAIL":
          b =
            m === "safari"
              ? u._(
                  /*BTDS*/ "To share your screen, allow WhatsApp access to screen sharing in Safari settings. In the menu bar, navigate to Safari \u2192 Settings \u2192 Websites \u2192 Screen Sharing and allow WhatsApp. You can also try restarting Safari.",
                )
              : u._(
                  /*BTDS*/ "To share your screen, allow WhatsApp access to screen sharing in your browser settings.",
                );
          break;
        case "VIDEO_UPGRADE_FAIL":
          b = u._(
            /*BTDS*/ "Something went wrong while switching to video. Please try again.",
          );
          break;
        default:
          throw r("err")("Invalid messaging type: " + c);
      }
      return d.jsx(r("WDSText.react"), {
        colorName: i,
        type: "Body2",
        children: b,
      });
    }
    v.displayName = v.name + " [from " + i.id + "]";
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
