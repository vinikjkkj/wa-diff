__d(
  "WAWebPhotoPicker.react",
  [
    "fbt",
    "ReactKonva",
    "WAGetUserMedia",
    "WAJids",
    "WALogger",
    "WAWebAnnouncementSpeakerIcon.react",
    "WAWebAvatarOverlay.react",
    "WAWebAvatarSpinner.react",
    "WAWebCommunityGeneralChatImage.react",
    "WAWebCommunitySquircleIcon.react",
    "WAWebConfirmPopup.react",
    "WAWebContactCollection",
    "WAWebDataTransfer",
    "WAWebDefaultGroupRefreshedIcon.react",
    "WAWebDefaultNewsletterIcon.react",
    "WAWebDefaultUserIcon.react",
    "WAWebDropdownItem.react",
    "WAWebEditGroupProfileDrawer.react",
    "WAWebEditImageModal.react",
    "WAWebFileUtils",
    "WAWebFocusTracer",
    "WAWebImg.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebMediaEditorUtilsCreateCanvasAndImage",
    "WAWebMediaLoad",
    "WAWebMiscGatingUtils",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebNewsletterGatingUtils",
    "WAWebNonEmptyString",
    "WAWebObjectFit.react",
    "WAWebOpenStatusQuotedFlow",
    "WAWebPhotoPickType",
    "WAWebPhotoPickerConstants",
    "WAWebPhotoPickerStyle",
    "WAWebPhotoViewerModal.react",
    "WAWebProfileCropConstants",
    "WAWebProfileCropTool.react",
    "WAWebRoundShape.react",
    "WAWebShape.react",
    "WAWebSpinner.react",
    "WAWebStatusCollection",
    "WAWebStatusImageRing.react",
    "WAWebTakePhotoMenuItem.react",
    "WAWebUISpacing",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "WAWebUnstyledButton.react",
    "WAWebUtilsGetColor",
    "WAWebUtilsSharpenFilter",
    "WAWebVelocityTransitionGroup",
    "WAWebWamEnumGroupProfileActionType",
    "WAWebWamEnumProfilePictureType",
    "WAWebWamEnumStatusRowSection",
    "WDSButton.react",
    "WDSFocusStateStyles",
    "WDSIconIcDelete.react",
    "WDSIconIcFolder.react",
    "WDSIconIcImageFilled.react",
    "WDSIconIcPhotoCamera.react",
    "WDSIconIcRefresh.react",
    "WDSIconIcVisibility.react",
    "WDSIconIcVisibilityOff.react",
    "WDSIconWdsIcStatus.react",
    "WDSIconWdsIcStickerSmiley.react",
    "WDSTooltip.react",
    "asyncToGeneratorRuntime",
    "cr:5981",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebDefaultProfileColors",
    "useWAWebIsKeyboardUser",
    "useWAWebUIM",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useEffect,
      _ = m.useMemo,
      f = m.useRef,
      g = m.useState,
      h =
        n("cr:5981") == null
          ? void 0
          : n("cr:5981").InternalStatusWarningImageOverlay,
      y = { iconBg: { backgroundColor: "x1od0jb8", $$css: !0 } };
    function C() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = d.jsx(
              "hr",
              babelHelpers.extends(
                {},
                (u || (u = r("stylex"))).props(
                  o("WAWebPhotoPickerStyle").styles.separator,
                  o("WAWebUISpacing").uiMargin.vert4,
                  o("WAWebUISpacing").uiMargin.horiz1,
                ),
              ),
            )),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    function b(t) {
      var a = t.HoverIcon,
        i = t.attachToChat,
        l = t.dataTab,
        c = t.dimmed,
        m = c === void 0 ? !1 : c,
        b = t.editImageButtonRef,
        S = t.forceClickable,
        R = S === void 0 ? !1 : S,
        L = t.id,
        E = t.onImageSet,
        k = t.pending,
        I = k === void 0 ? !1 : k,
        T = t.readOnly,
        D = T === void 0 ? !1 : T,
        x = t.sendGroupProfilePictureLoggingEvent,
        $ = t.showAddIconOverlay,
        P = $ === void 0 ? !0 : $,
        N = t.showHiddenSubgroupIcon,
        M = N === void 0 ? !1 : N,
        w = t.showOutline,
        A = w === void 0 ? !1 : w,
        F = t.size,
        O = t.startImage,
        B = O === void 0 ? "" : O,
        W = t.tabIndex,
        q = t.testid,
        U = t.theme,
        V = t.type,
        H = g(B != null ? B : ""),
        G = H[0],
        z = H[1],
        j = g(!1),
        K = j[0],
        Q = j[1],
        X = g(null),
        Y = X[0],
        J = X[1],
        Z = g(),
        ee = Z[0],
        te = Z[1],
        ne = g(),
        re = ne[0],
        oe = ne[1],
        ae = r("useWAWebUIM")(),
        ie = r("useWAWebIsKeyboardUser")(),
        le = ie.isKeyboardUser,
        se = f(null),
        ue = f(null),
        ce = s._(/*BTDS*/ "View group profile picture"),
        de = f(),
        me = f(
          [].concat(
            o("WAWebPhotoPickerConstants").getPhotoPickerQualifiedEmojis(),
          ),
        );
      (B != null ? B : "") !== G &&
        (z(B != null ? B : ""), J(B === "" ? null : Y));
      var pe =
          V === o("WAWebPhotoPickerConstants").PhotoPickerType.NEWSLETTER &&
          L != null &&
          o("WAWebNewsletterGatingUtils").isNewsletterStatusReceiverEnabled(),
        _e =
          pe && L != null
            ? o("WAWebStatusCollection").StatusCollection.get(L)
            : null,
        fe = _e != null,
        ge = R || (!I && (Y != null || (G === "" && !D))) || fe,
        he = fe
          ? (F != null ? F : o("WAWebPhotoPickerStyle").PHOTO_PICKER_SIZE) +
            o("WAWebPhotoPickerStyle").STATUS_RING_PADDING
          : 0,
        ye = function (t) {
          V === o("WAWebPhotoPickerConstants").PhotoPickerType.GROUP &&
            (x == null || x(t, !!B));
        },
        Ce = function (t) {
          V === o("WAWebPhotoPickerConstants").PhotoPickerType.GROUP &&
            x != null &&
            x(
              o("WAWebWamEnumGroupProfileActionType").GROUP_PROFILE_ACTION_TYPE
                .PROFILE_PIC_UPDATED,
              !!B,
              t,
            );
        },
        be = function (t) {
          if (
            V === o("WAWebPhotoPickerConstants").PhotoPickerType.GROUP &&
            x != null
          ) {
            var e = v(t);
            x(e, !!B);
          }
        },
        ve = function (t) {
          ye(
            o("WAWebWamEnumGroupProfileActionType").GROUP_PROFILE_ACTION_TYPE
              .TAP_ACTION_ITEM_UPLOAD_PHOTO,
          );
          var e = ue.current;
          if (e) return (e.click(), !0);
        },
        Se = function () {
          te(null);
        },
        Re = function (t) {
          var e = t.currentTarget.clientWidth,
            n = t.currentTarget.clientHeight;
          J({ width: e, height: n });
        },
        Le = function (t) {
          Q(!1);
        },
        Ee = function (t) {
          Q(!0);
        },
        ke = function (t) {
          Q(!0);
        },
        Ie = function (n, r, a) {
          var t = o("WAWebNonEmptyString").asMaybeNonEmptyString(n),
            i = o("WAWebNonEmptyString").asMaybeNonEmptyString(r);
          if (t == null || i == null) {
            (z(""), J(null));
            return;
          }
          o("WAWebMediaLoad")
            .loadImage(t)
            .then(function (e) {
              (z(t), E(t, i, a));
            })
            .catch(function (t) {
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "PhotoPicker:onImageReceived failed to load image: ",
                    "",
                  ])),
                String(t),
              );
              var n;
              switch (V) {
                case o("WAWebPhotoPickerConstants").PhotoPickerType.NEWSLETTER:
                  n = s._(/*BTDS*/ "Couldn't set channel icon.");
                  break;
                case o("WAWebPhotoPickerConstants").PhotoPickerType.GROUP:
                case o("WAWebPhotoPickerConstants").PhotoPickerType
                  .GENERAL_GROUP:
                  n = s._(/*BTDS*/ "Couldn't set group icon.");
                  break;
                case o("WAWebPhotoPickerConstants").PhotoPickerType.COMMUNITY:
                  n = s._(/*BTDS*/ "Couldn't set community icon.");
                  break;
                case o("WAWebPhotoPickerConstants").PhotoPickerType.PROFILE:
                  n = s._(/*BTDS*/ "Couldn't set profile picture.");
                  break;
                case o("WAWebPhotoPickerConstants").PhotoPickerType
                  .DEFAULT_ANNOUNCEMENT_GROUP:
                  break;
                case o("WAWebPhotoPickerConstants").PhotoPickerType.COVER_PHOTO:
                  break;
              }
              o("WAWebModalManager").ModalManager.openSupportModal(
                d.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                  onOK: o("WAWebModalManager").closeSupportOrModal,
                  tsNavigationData: {
                    surface: "unknown",
                    viewName: "photo-picker-error",
                  },
                  children: n,
                }),
              );
            });
        },
        Te = function (t) {
          var e = URL.createObjectURL(t);
          o("WAWebMediaLoad")
            .loadImage(e)
            .then(function (e) {
              if (
                e &&
                (e.width < o("WAWebProfileCropConstants").PROF_PIC_MIN_SIDE ||
                  e.height < o("WAWebProfileCropConstants").PROF_PIC_MIN_SIDE)
              )
                o("WAWebModalManager").ModalManager.openSupportModal(
                  d.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                    onOK: o("WAWebModalManager").closeSupportOrModal,
                    tsNavigationData: {
                      surface: "unknown",
                      viewName: "photo-picker-error-too-small",
                    },
                    children: s._(
                      /*BTDS*/ '_j{"*":"This photo is too small. Please select a photo with height and width of at least {number_of_pixels} pixels.","_1":"This photo is too small. Please select a photo with height and width of at least 1 pixel."}',
                      [
                        s._plural(
                          o("WAWebProfileCropConstants").PROF_PIC_MIN_SIDE,
                          "number_of_pixels",
                        ),
                      ],
                    ),
                  }),
                );
              else {
                var n =
                    V ===
                    o("WAWebPhotoPickerConstants").PhotoPickerType.COVER_PHOTO
                      ? o("WAWebModal.react").ModalTheme.BoxLarge
                      : o("WAWebModal.react").ModalTheme.Box,
                  a;
                (V ===
                o("WAWebPhotoPickerConstants").PhotoPickerType.COVER_PHOTO
                  ? (a = o("WAWebProfileCropTool.react").CropShapeType.RECT)
                  : V ===
                      o("WAWebPhotoPickerConstants").PhotoPickerType.COMMUNITY
                    ? (a = o("WAWebProfileCropTool.react").CropShapeType
                        .SQUIRCLE)
                    : (a = o("WAWebProfileCropTool.react").CropShapeType
                        .CIRCLE),
                  o("WAWebModalManager").ModalManager.openSupportModal(
                    d.jsx(r("WAWebEditImageModal.react"), {
                      img: t,
                      onFinished: function (t, n) {
                        (Ce(
                          o("WAWebWamEnumProfilePictureType")
                            .PROFILE_PICTURE_TYPE.PHOTO_UPLOAD,
                        ),
                          Ie(
                            t,
                            n,
                            o("WAWebPhotoPickType").PhotoPickType.Gallery,
                          ));
                      },
                      onRetake: ve,
                      cropShape: a,
                      theme: n,
                    }),
                  ));
              }
            })
            .catch(function () {
              var e;
              switch (V) {
                case o("WAWebPhotoPickerConstants").PhotoPickerType.NEWSLETTER:
                  e = s._(/*BTDS*/ "Couldn't set channel icon.");
                  break;
                case o("WAWebPhotoPickerConstants").PhotoPickerType.GROUP:
                case o("WAWebPhotoPickerConstants").PhotoPickerType
                  .GENERAL_GROUP:
                  e = s._(/*BTDS*/ "Couldn't set group icon.");
                  break;
                case o("WAWebPhotoPickerConstants").PhotoPickerType.COMMUNITY:
                  e = s._(/*BTDS*/ "Couldn't set community icon.");
                  break;
                case o("WAWebPhotoPickerConstants").PhotoPickerType.PROFILE:
                  e = s._(/*BTDS*/ "Couldn't set profile picture.");
                  break;
                case o("WAWebPhotoPickerConstants").PhotoPickerType
                  .DEFAULT_ANNOUNCEMENT_GROUP:
                  break;
                case o("WAWebPhotoPickerConstants").PhotoPickerType.COVER_PHOTO:
                  e = s._(/*BTDS*/ "Couldn't set cover photo.");
                  break;
              }
              o("WAWebModalManager").ModalManager.openSupportModal(
                d.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                  onOK: o("WAWebModalManager").closeSupportOrModal,
                  tsNavigationData: {
                    surface: "unknown",
                    viewName: "photo-picker-error-upload",
                  },
                  children: e,
                }),
              );
            })
            .finally(function () {
              URL.revokeObjectURL(e);
            });
        },
        De = function () {
          return b || se;
        },
        xe = function () {
          var e = De();
          e.current && r("WAWebFocusTracer").focus(e.current);
        },
        $e = function (t) {
          Se();
          var e = t.target.files[0];
          if (!e) return !1;
          (Te(e), (t.target.value = ""), xe());
        },
        Pe = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = Math.floor(Math.random() * me.current.length);
            (oe({
              color: r("WAWebUtilsGetColor")(
                o("WAWebEditGroupProfileDrawer.react").COLOR_OPTIONS[
                  Math.floor(
                    Math.random() *
                      o("WAWebEditGroupProfileDrawer.react").COLOR_OPTIONS
                        .length,
                  )
                ],
                200,
              ),
              emoji: yield o(
                "WAWebMediaEditorUtilsCreateCanvasAndImage",
              ).createImageFromEmoji(me.current[e]),
            }),
              me.current.splice(e, 1),
              me.current.length === 0 &&
                (me.current = [].concat(
                  o(
                    "WAWebPhotoPickerConstants",
                  ).getPhotoPickerQualifiedEmojis(),
                )));
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        Ne = function (t) {
          if (ee) {
            var e = new (r("WAWebDataTransfer"))(t.clipboardData),
              n = e.getFiles().filter(function (e) {
                return o("WAWebFileUtils").typeFromMimetype(e.type) === "image";
              });
            if (n.length) {
              (t.preventDefault(), t.stopPropagation(), Se());
              var a = n[0];
              Te(a);
            }
          }
        },
        Me = function () {
          ye(
            o("WAWebWamEnumGroupProfileActionType").GROUP_PROFILE_ACTION_TYPE
              .TAP_ACTION_ITEM_VIEW_PHOTO,
          );
          var e = De().current;
          if (!(!e || !L)) {
            var t = function (n) {
                n(e);
              },
              n = o("WAWebContactCollection").ContactCollection.assertGet(L),
              a = { transition: "profile-viewer" };
            (i && (a.uim = ae),
              o("WAWebModalManager").ModalManager.openMedia(
                d.jsx(r("WAWebPhotoViewerModal.react"), {
                  contact: n,
                  profilePicThumb: n.getProfilePicThumb(),
                  animateBorderRadius:
                    V !==
                    o("WAWebPhotoPickerConstants").PhotoPickerType.COMMUNITY,
                  animateSquircle:
                    V ===
                    o("WAWebPhotoPickerConstants").PhotoPickerType.COMMUNITY,
                  getZoomNode: t,
                }),
                a,
              ));
          }
        },
        we = function () {
          (E(void 0, void 0, o("WAWebPhotoPickType").PhotoPickType.None),
            o("WAWebModalManager").ModalManager.closeSupportOrModal(),
            Ce(
              o("WAWebWamEnumProfilePictureType").PROFILE_PICTURE_TYPE
                .REMOVE_PHOTO,
            ));
        },
        Ae = function (t) {
          ye(
            o("WAWebWamEnumGroupProfileActionType").GROUP_PROFILE_ACTION_TYPE
              .TAP_ACTION_ITEM_REMOVE_PHOTO,
          );
          var e;
          switch (V) {
            case o("WAWebPhotoPickerConstants").PhotoPickerType.NEWSLETTER:
              e = s._(/*BTDS*/ "Remove this channel's icon?");
              break;
            case o("WAWebPhotoPickerConstants").PhotoPickerType.GROUP:
            case o("WAWebPhotoPickerConstants").PhotoPickerType.GENERAL_GROUP:
              e = s._(/*BTDS*/ "Remove this group's icon?");
              break;
            case o("WAWebPhotoPickerConstants").PhotoPickerType.COMMUNITY:
              e = s._(/*BTDS*/ "Remove this community's icon?");
              break;
            case o("WAWebPhotoPickerConstants").PhotoPickerType.PROFILE:
              e = s._(/*BTDS*/ "Remove your profile picture?");
              break;
            case o("WAWebPhotoPickerConstants").PhotoPickerType
              .DEFAULT_ANNOUNCEMENT_GROUP:
              break;
            case o("WAWebPhotoPickerConstants").PhotoPickerType.COVER_PHOTO:
              e = s._(/*BTDS*/ "Remove your cover photo?");
              break;
          }
          o("WAWebModalManager").ModalManager.openSupportModal(
            d.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              onOK: we,
              okText: s._(/*BTDS*/ "Remove"),
              onCancel: o("WAWebModalManager").closeSupportOrModal,
              cancelText: s._(/*BTDS*/ "Cancel"),
              tsNavigationData: {
                surface: "unknown",
                viewName: "photo-picker-remove",
              },
              children: e,
            }),
          );
        },
        Fe = function (t) {
          ye(
            o("WAWebWamEnumGroupProfileActionType").GROUP_PROFILE_ACTION_TYPE
              .TAP_ACTION_ITEM_EMOJI_STICKER,
          );
          var e = s._(/*BTDS*/ "Emoji and sticker");
          o("WAWebModalManager").ModalManager.openSupportModal(
            d.jsx(o("WAWebModal.react").Modal, {
              type: o("WAWebModal.react").ModalTheme.Box,
              ariaLabel: e,
              onOverlayClick: o("WAWebModalManager").closeSupportOrModal,
              testid: void 0,
              children: d.jsx(
                o("WAWebEditGroupProfileDrawer.react").EditGroupProfileDrawer,
                {
                  title: e,
                  onCancel: o("WAWebModalManager").closeSupportOrModal,
                  onFinished: function (t, n, r) {
                    (Ce(
                      o("WAWebWamEnumProfilePictureType").PROFILE_PICTURE_TYPE[
                        String(r)
                      ],
                    ),
                      Ie(
                        t,
                        n,
                        r ===
                          o("WAWebEditGroupProfileDrawer.react").ImageType.EMOJI
                          ? o("WAWebPhotoPickType").PhotoPickType.Emoji
                          : o("WAWebPhotoPickType").PhotoPickType.Sticker,
                      ),
                      o(
                        "WAWebModalManager",
                      ).ModalManager.closeSupportOrModal());
                  },
                  sendEmojiStickerPanelOpenLoggingEvent: be,
                },
              ),
            }),
          );
        },
        Oe = function (t) {
          fe &&
            L != null &&
            t.push(
              d.jsx(
                o("WAWebDropdownItem.react").DropdownItem,
                {
                  icon: d.jsx(r("WDSIconWdsIcStatus.react"), {}),
                  testid: void 0,
                  action: function () {
                    o("WAWebOpenStatusQuotedFlow").fetchAndOpenNewsletterStatus(
                      {
                        newsletterJid: o("WAJids").toNewsletterJid(
                          L.toString(),
                        ),
                        statusModelId: L,
                        rowSection: o("WAWebWamEnumStatusRowSection")
                          .STATUS_ROW_SECTION.CHANNEL_INFO_PAGE,
                        rowIndex: 0,
                      },
                    );
                  },
                  children: s._(/*BTDS*/ "View status"),
                },
                "view-status",
              ),
            );
        },
        Be = function () {
          var e = [];
          Oe(e);
          var t = function () {
            G !== ""
              ? Me()
              : (Se(),
                o("WAWebModalManager").ModalManager.openSupportModal(
                  d.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                    onOK: o("WAWebModalManager").closeSupportOrModal,
                    children: s._(/*BTDS*/ "No profile photo."),
                  }),
                ));
          };
          return (
            e.push(
              d.jsx(
                o("WAWebDropdownItem.react").DropdownItem,
                {
                  icon: d.jsx(r("WDSIconIcVisibility.react"), {}),
                  testid: void 0,
                  action: t,
                  children: s._(/*BTDS*/ "View photo"),
                },
                "view-photo",
              ),
            ),
            e
          );
        },
        We = function () {
          var e = [];
          if (
            (Oe(e),
            L != null &&
              G !== "" &&
              e.push(
                d.jsx(
                  o("WAWebDropdownItem.react").DropdownItem,
                  {
                    icon: d.jsx(r("WDSIconIcVisibility.react"), {}),
                    testid: void 0,
                    action: Me,
                    children: s._(/*BTDS*/ "View photo"),
                  },
                  "view",
                ),
              ),
            o("WAGetUserMedia").getUserMedia)
          ) {
            var t =
                V === o("WAWebPhotoPickerConstants").PhotoPickerType.COVER_PHOTO
                  ? o("WAWebProfileCropTool.react").CropShapeType.RECT
                  : o("WAWebProfileCropTool.react").CropShapeType.CIRCLE,
              n =
                V === o("WAWebPhotoPickerConstants").PhotoPickerType.COVER_PHOTO
                  ? o("WAWebModal.react").ModalTheme.BoxLarge
                  : o("WAWebModal.react").ModalTheme.Box;
            e.push(
              d.jsx(
                r("WAWebTakePhotoMenuItem.react"),
                {
                  icon: d.jsx(r("WDSIconIcPhotoCamera.react"), {}),
                  onImageTake: function (t, n) {
                    (Ce(
                      o("WAWebWamEnumProfilePictureType").PROFILE_PICTURE_TYPE
                        .PHOTO_CAMERA,
                    ),
                      Ie(t, n, o("WAWebPhotoPickType").PhotoPickType.Camera));
                  },
                  editCropShape: t,
                  modalTheme: n,
                  action: function () {
                    ye(
                      o("WAWebWamEnumGroupProfileActionType")
                        .GROUP_PROFILE_ACTION_TYPE.TAP_ACTION_ITEM_TAKE_PHOTO,
                    );
                  },
                },
                "take",
              ),
            );
          }
          return (
            e.push(
              d.jsx(
                o("WAWebDropdownItem.react").DropdownItem,
                {
                  icon: d.jsx(r("WDSIconIcFolder.react"), {}),
                  testid: void 0,
                  action: ve,
                  children: s._(/*BTDS*/ "Upload photo"),
                },
                "upload",
              ),
            ),
            o("WAWebMiscGatingUtils").groupProfileEditorEnabled() &&
              (V === o("WAWebPhotoPickerConstants").PhotoPickerType.GROUP ||
                V ===
                  o("WAWebPhotoPickerConstants").PhotoPickerType.COMMUNITY ||
                V ===
                  o("WAWebPhotoPickerConstants").PhotoPickerType.NEWSLETTER) &&
              e.push(
                d.jsx(
                  o("WAWebDropdownItem.react").DropdownItem,
                  {
                    icon: d.jsx(r("WDSIconWdsIcStickerSmiley.react"), {}),
                    testid: void 0,
                    action: Fe,
                    children: s._(/*BTDS*/ "Emoji & sticker"),
                  },
                  "edit",
                ),
              ),
            G !== "" &&
              (e.push(d.jsx(C, {}, "separator")),
              e.push(
                d.jsx(
                  o("WAWebDropdownItem.react").DropdownItem,
                  {
                    icon: d.jsx(r("WDSIconIcDelete.react"), {}),
                    testid: void 0,
                    action: Ae,
                    theme: o("WAWebDropdownItem.react").DropdownItemThemeType
                      .Negative,
                    children: s._(/*BTDS*/ "Remove photo"),
                  },
                  "remove",
                ),
              )),
            e
          );
        },
        qe = function (t) {
          if (ge) {
            if (D && !fe) {
              G !== "" && Me();
              return;
            }
            (t.stopPropagation(), t.preventDefault());
            var e = D ? Be() : We();
            (te({ menu: e, event: t }),
              V === o("WAWebPhotoPickerConstants").PhotoPickerType.GROUP &&
                x != null &&
                x(
                  o("WAWebWamEnumGroupProfileActionType")
                    .GROUP_PROFILE_ACTION_TYPE.CHANGE_PROFILE_PHOTO,
                  !!B,
                ));
          }
        },
        Ue = function (t) {
          if (ge) {
            if (D && !fe) {
              G !== "" && Me();
              return;
            }
            (t.stopPropagation(), t.preventDefault());
            var e = D ? Be() : We();
            te({ menu: e, anchor: De().current });
          }
        },
        Ve = function () {
          return F != null ? { width: F, height: F } : void 0;
        },
        He;
      G !== "" &&
        (He = d.jsx(r("WAWebObjectFit.react"), {
          type: "cover",
          size: Y,
          children: d.jsx(r("WAWebImg.react"), {
            src: G,
            crossOrigin: !1,
            style: { height: "100%", width: "100%" },
            onLoad: Re,
          }),
        }));
      var Ge;
      (I || (G !== "" && !Y)) &&
        (V === o("WAWebPhotoPickerConstants").PhotoPickerType.COVER_PHOTO
          ? (Ge = d.jsx(
              "div",
              babelHelpers.extends(
                {},
                (u || (u = r("stylex"))).props(
                  o("WAWebPhotoPickerStyle").styles.loadingBg,
                ),
                {
                  children: d.jsx(
                    "div",
                    babelHelpers.extends(
                      {},
                      u.props(o("WAWebPhotoPickerStyle").styles.cornerSpinner),
                      {
                        children: d.jsx(o("WAWebSpinner.react").Spinner, {
                          size: 24,
                          stroke: 3,
                          color: "solidwhite",
                        }),
                      },
                    ),
                  ),
                },
              ),
            ))
          : (Ge = d.jsx(r("WAWebAvatarSpinner.react"), {})));
      var ze = null;
      if (!I && !D && (G === "" || Y) && (G === "" || ee || K)) {
        var je = "";
        switch (V) {
          case o("WAWebPhotoPickerConstants").PhotoPickerType.NEWSLETTER:
            je =
              G !== ""
                ? s._(/*BTDS*/ "Change channel icon")
                : s._(/*BTDS*/ "Add channel icon");
            break;
          case o("WAWebPhotoPickerConstants").PhotoPickerType.GROUP:
          case o("WAWebPhotoPickerConstants").PhotoPickerType.GENERAL_GROUP:
            je =
              G !== ""
                ? s._(/*BTDS*/ "Change group icon")
                : s._(/*BTDS*/ "Add group icon");
            break;
          case o("WAWebPhotoPickerConstants").PhotoPickerType.COMMUNITY:
            je =
              G !== ""
                ? s._(/*BTDS*/ "Change community icon")
                : s._(/*BTDS*/ "Add community icon");
            break;
          case o("WAWebPhotoPickerConstants").PhotoPickerType.PROFILE:
            je =
              G !== ""
                ? s._(/*BTDS*/ "Change profile picture")
                : s._(/*BTDS*/ "Add profile picture");
            break;
          case o("WAWebPhotoPickerConstants").PhotoPickerType
            .DEFAULT_ANNOUNCEMENT_GROUP:
            break;
          case o("WAWebPhotoPickerConstants").PhotoPickerType.COVER_PHOTO:
            break;
        }
        (V !== o("WAWebPhotoPickerConstants").PhotoPickerType.COVER_PHOTO &&
          P &&
          (ze = d.jsx(o("WAWebAvatarOverlay.react").AvatarOverlay, {
            icon: d.jsx(r("WDSIconIcImageFilled.react"), {
              height: 24,
              width: 24,
            }),
            text: je,
            theme:
              V === o("WAWebPhotoPickerConstants").PhotoPickerType.COMMUNITY
                ? o("WAWebAvatarOverlay.react").AvatarOverlayTheme.COMMUNITY
                : o("WAWebAvatarOverlay.react").AvatarOverlayTheme.DEFAULT,
          })),
          (ce = je));
      }
      p(
        function () {
          if (
            U ===
              o("WAWebPhotoPickerConstants").PhotoPickerThemeType
                .EMOJI_SUGGESTIONS &&
            re
          ) {
            var e,
              t,
              n,
              r,
              a = {
                mimeType: "image/jpeg",
                width: o("WAWebEditGroupProfileDrawer.react").PHOTO_SIZE,
                height: o("WAWebEditGroupProfileDrawer.react").PHOTO_SIZE,
              },
              i =
                (e =
                  (t = de.current) == null
                    ? void 0
                    : t.toDataURL(
                        babelHelpers.extends({}, a, {
                          pixelRatio:
                            o("WAWebProfileCropConstants").PROF_PIC_THUMB_SIDE /
                            o("WAWebEditGroupProfileDrawer.react").PHOTO_SIZE,
                          quality: 0,
                        }),
                      )) != null
                  ? e
                  : "",
              l =
                (n =
                  (r = de.current) == null
                    ? void 0
                    : r.toDataURL(
                        babelHelpers.extends({}, a, {
                          pixelRatio:
                            (o("WAWebProfileCropConstants").PROF_PIC_MIN_SIDE *
                              2) /
                            o("WAWebEditGroupProfileDrawer.react").PHOTO_SIZE,
                          quality: 1,
                        }),
                      )) != null
                  ? n
                  : "";
            Ie(i, l, o("WAWebPhotoPickType").PhotoPickType.Emoji);
          }
        },
        [re],
      );
      var Ke, Qe;
      if (
        U ===
        o("WAWebPhotoPickerConstants").PhotoPickerThemeType.EMOJI_SUGGESTIONS
      ) {
        var Xe = re || {},
          Ye = Xe.color,
          Je = Xe.emoji;
        if (
          ((Ke = d.jsx(r("WDSButton.react"), {
            Icon: r("WDSIconIcRefresh.react"),
            variant: "filled",
            type: "default",
            size: "medium",
            onPress: function () {
              Pe();
            },
            "aria-label": s._(/*BTDS*/ "Set random picture"),
            xstyle: [
              o("WAWebPhotoPickerStyle").styles.bottomEndFloater,
              o("WAWebPhotoPickerStyle").styles.newSuggestion,
              o("WAWebPhotoPickerStyle").styles.bottomEndFloaterRefreshed,
            ],
            testid: void 0,
          })),
          Ye != null && Je)
        ) {
          var Ze, et;
          Qe = d.jsx((Ze = o("ReactKonva")).Stage, {
            ref: de,
            width: (et = o("WAWebEditGroupProfileDrawer.react")).PHOTO_SIZE,
            height: et.PHOTO_SIZE,
            className: (u || (u = r("stylex")))(
              o("WAWebPhotoPickerStyle").styles.hidden,
            ),
            children: d.jsxs(o("ReactKonva").Layer, {
              children: [
                d.jsx(o("ReactKonva").Rect, {
                  width: o("WAWebEditGroupProfileDrawer.react").PHOTO_SIZE,
                  height: o("WAWebEditGroupProfileDrawer.react").PHOTO_SIZE,
                  fill: Ye,
                }),
                d.jsx(o("ReactKonva").Image, {
                  width: o("WAWebEditGroupProfileDrawer.react").IMAGE_SIZE,
                  height: o("WAWebEditGroupProfileDrawer.react").IMAGE_SIZE,
                  offset: {
                    x: o("WAWebEditGroupProfileDrawer.react").IMAGE_SIZE / 2,
                    y: o("WAWebEditGroupProfileDrawer.react").IMAGE_SIZE / 2,
                  },
                  x: o("WAWebEditGroupProfileDrawer.react").PHOTO_SIZE / 2,
                  y: o("WAWebEditGroupProfileDrawer.react").PHOTO_SIZE / 2,
                  image: Je,
                  filters:
                    Je.naturalWidth <=
                      o("WAWebEditGroupProfileDrawer.react")
                        .EMOJI_IMAGE_SHARPEN_SIZE_THRESHOLD &&
                    Je.naturalHeight <=
                      o("WAWebEditGroupProfileDrawer.react")
                        .EMOJI_IMAGE_SHARPEN_SIZE_THRESHOLD
                      ? [r("WAWebUtilsSharpenFilter")]
                      : [],
                }),
              ],
            }),
          });
        }
      }
      var tt = M
          ? d.jsx(r("WAWebRoundShape.react"), {
              xstyle: [
                o("WAWebPhotoPickerStyle").styles.bottomEndFloater,
                o("WAWebPhotoPickerStyle").styles.hiddenSubgroupContainer,
                [
                  o("WAWebPhotoPickerStyle").styles.roundRefreshedSize,
                  o("WAWebPhotoPickerStyle").styles.bottomEndFloaterRefreshed,
                ],
              ],
              children: d.jsx(r("WDSIconIcVisibilityOff.react"), {
                iconXstyle: o("WAWebPhotoPickerStyle").styles
                  .hiddenSubgroupIcon,
                width: 30,
                height: 30,
              }),
            })
          : null,
        nt;
      ee &&
        (nt = d.jsx(o("WAWebUimUie.react").UIE, {
          displayName: "PhotoPickerContextMenu",
          escapable: !0,
          popable: !0,
          dismissOnWindowResize: !0,
          requestDismiss: Se,
          children: d.jsx(r("WAWebUimUieMenu.react"), { contextMenu: ee }),
        }));
      var rt = o("useWAWebDefaultProfileColors").useDefaultProfileColors(L),
        ot = rt.background,
        at = rt.foreground,
        it = _(
          function () {
            var e = [o("WAWebPhotoPickerStyle").styles.svgSize];
            return (
              V === o("WAWebPhotoPickerConstants").PhotoPickerType.NEWSLETTER
                ? e.push(o("WAWebPhotoPickerStyle").styles.newsletterAvatar)
                : V ===
                    o("WAWebPhotoPickerConstants").PhotoPickerType.COMMUNITY &&
                  e.push(o("WAWebPhotoPickerStyle").styles.communitySquircle),
              V ===
                o("WAWebPhotoPickerConstants").PhotoPickerType
                  .DEFAULT_ANNOUNCEMENT_GROUP &&
                o("WAWebPhotoPickerStyle").styles
                  .defaultAnnouncementGroupIcon &&
                e.push(
                  o("WAWebPhotoPickerStyle").styles
                    .defaultAnnouncementGroupIconSvg,
                ),
              ot != null && e.push(ot),
              {
                innerStyles: {
                  primary:
                    at != null
                      ? at
                      : o("WAWebPhotoPickerStyle").styles.primaryFill,
                  background: o("WAWebPhotoPickerStyle").styles.backgroundFill,
                },
                "aria-hidden": !0,
                iconXstyle: e,
              }
            );
          },
          [V, at, ot],
        ),
        lt;
      if (I || G === "" || !Y) {
        var st;
        switch (V) {
          case o("WAWebPhotoPickerConstants").PhotoPickerType.PROFILE:
            st = d.jsx(
              o("WAWebDefaultUserIcon.react").DefaultUserIcon,
              babelHelpers.extends({}, it),
            );
            break;
          case o("WAWebPhotoPickerConstants").PhotoPickerType.COMMUNITY:
            st = d.jsx(
              o("WAWebCommunitySquircleIcon.react").CommunitySquircleIcon,
              babelHelpers.extends({}, it),
            );
            break;
          case o("WAWebPhotoPickerConstants").PhotoPickerType.NEWSLETTER:
            st = d.jsx(
              o("WAWebDefaultNewsletterIcon.react").DefaultNewsletterIcon,
              babelHelpers.extends({}, it),
            );
            break;
          case o("WAWebPhotoPickerConstants").PhotoPickerType
            .DEFAULT_ANNOUNCEMENT_GROUP:
            st = d.jsx(
              o("WAWebAnnouncementSpeakerIcon.react").AnnouncementSpeakerIcon,
              babelHelpers.extends({ directional: !0 }, it),
            );
            break;
          case o("WAWebPhotoPickerConstants").PhotoPickerType.GENERAL_GROUP:
            lt = d.jsx(
              o("WAWebCommunityGeneralChatImage.react")
                .CommunityGeneralChatImage,
              {},
            );
            break;
          case o("WAWebPhotoPickerConstants").PhotoPickerType.COVER_PHOTO:
            st = null;
            break;
          case o("WAWebPhotoPickerConstants").PhotoPickerType.GROUP:
            st = d.jsx(r("WAWebShape.react"), {
              shape: "circle",
              xstyle: y.iconBg,
              children: d.jsx(
                o("WAWebDefaultGroupRefreshedIcon.react")
                  .DefaultGroupRefreshedIcon,
                babelHelpers.extends({}, it),
              ),
            });
            break;
        }
        st != null &&
          (lt = d.jsx(
            "div",
            babelHelpers.extends(
              {},
              (u || (u = r("stylex"))).props(
                V ===
                  o("WAWebPhotoPickerConstants").PhotoPickerType
                    .DEFAULT_ANNOUNCEMENT_GROUP &&
                  o("WAWebPhotoPickerStyle").styles
                    .defaultAnnouncementGroupIcon,
              ),
              { children: st },
            ),
          ));
      }
      var ut =
          document.activeElement === De().current
            ? { space: Ue, enter: Ue }
            : {},
        ct = [
          o("WAWebPhotoPickerStyle").styles.body,
          ge && o("WAWebPhotoPickerStyle").styles.clickable,
          o("WAWebUISpacing").uiMargin.horizAuto,
          le && ge && o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
        ];
      ((V === o("WAWebPhotoPickerConstants").PhotoPickerType.COMMUNITY ||
        V ===
          o("WAWebPhotoPickerConstants").PhotoPickerType
            .DEFAULT_ANNOUNCEMENT_GROUP) &&
        ct.push(o("WAWebPhotoPickerStyle").styles.squircleBackground),
        V === o("WAWebPhotoPickerConstants").PhotoPickerType.COVER_PHOTO &&
          ct.push(o("WAWebPhotoPickerStyle").styles.rectBackground));
      var dt = W != null ? W : 0,
        mt = d.jsxs(r("WAWebUnstyledButton.react"), {
          xstyle: ct,
          onClick: qe,
          onMouseOver: ke,
          onMouseEnter: Ee,
          onMouseLeave: Le,
          onPaste: Ne,
          onFocus: Ee,
          onBlur: Le,
          ref: De(),
          dir: "ltr",
          tabIndex: dt,
          dataTab: l,
          role: "button",
          disabled: !ge,
          testid: void 0,
          children: [
            d.jsxs(
              "div",
              babelHelpers.extends(
                {},
                (u || (u = r("stylex"))).props(
                  o("WAWebPhotoPickerStyle").styles.imageContainer,
                  m && o("WAWebPhotoPickerStyle").styles.dimmed,
                ),
                {
                  role: "img",
                  "aria-label": ce.toString(),
                  children: [He, h && L ? d.jsx(h, { id: L }) : null, lt, Qe],
                },
              ),
            ),
            d.jsxs(r("WAWebVelocityTransitionGroup"), {
              transitionName: "fade",
              children: [Ge, ze],
            }),
          ],
        }),
        pt = D && ge,
        _t = pt
          ? d.jsx(r("WDSTooltip.react"), {
              label: s._(/*BTDS*/ "View photo"),
              children: mt,
            })
          : mt;
      return d.jsxs(o("WAWebKeyboardHotKeys.react").HotKeys, {
        className: u(
          o("WAWebPhotoPickerStyle").styles.containerRefreshed,
          U ===
            o("WAWebPhotoPickerConstants").PhotoPickerThemeType.COVER_PHOTO &&
            o("WAWebPhotoPickerStyle").styles.coverPhoto,
          K && G !== "" && D && o("WAWebPhotoPickerStyle").styles.dimmed,
          A && He != null && o("WAWebPhotoPickerStyle").styles.imageBorder,
          o("WAWebUISpacing").uiMargin.horizAuto,
        ),
        style: Ve(),
        handlers: ut,
        "aria-label": ce.toString(),
        children: [
          fe &&
            L != null &&
            d.jsx(
              "div",
              babelHelpers.extends(
                {},
                (u || (u = r("stylex"))).props(
                  o("WAWebPhotoPickerStyle").styles.statusRingOverlay,
                ),
                {
                  children: d.jsx(
                    o("WAWebStatusImageRing.react").StatusImageRing,
                    {
                      id: L,
                      size: he,
                      stroke: 4,
                      theme: o("WAWebStatusImageRing.react").RingTheme
                        .UpdatesTab,
                      respectAppTheme: !0,
                      breakRing: !1,
                      hideWhenNoUnreadStatuses: !1,
                    },
                  ),
                },
              ),
            ),
          _t,
          a != null &&
            !D &&
            d.jsx(
              "div",
              babelHelpers.extends(
                {},
                (u || (u = r("stylex"))).props(
                  o("WAWebPhotoPickerStyle").styles.icon,
                ),
                { children: d.jsx(a, { width: 16, height: 16 }) },
              ),
            ),
          d.jsx("input", {
            ref: ue,
            type: "file",
            accept: "image/gif,image/jpeg,image/jpg,image/png",
            style: { display: "none" },
            onChange: $e,
          }),
          nt,
          Ke,
          tt,
        ],
      });
    }
    b.displayName = b.name + " [from " + i.id + "]";
    var v = function (t) {
      switch (t) {
        case o("WAWebEditGroupProfileDrawer.react").ImageType.EMOJI:
          return o("WAWebWamEnumGroupProfileActionType")
            .GROUP_PROFILE_ACTION_TYPE.EMOJI_PANEL_OPEN;
        case o("WAWebEditGroupProfileDrawer.react").ImageType.STICKER:
          return o("WAWebWamEnumGroupProfileActionType")
            .GROUP_PROFILE_ACTION_TYPE.STICKER_PANEL_OPEN;
      }
    };
    l.default = b;
  },
  226,
);
