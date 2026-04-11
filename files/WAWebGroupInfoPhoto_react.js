__d(
  "WAWebGroupInfoPhoto.react",
  [
    "fbt",
    "WAAbortError",
    "WAFilteredCatch",
    "WALogger",
    "WANullthrows",
    "WAPromiseRaceAbort",
    "WAWebChatGroupUtils",
    "WAWebCommunityGatingUtils",
    "WAWebGroupProfilePictureWamEvent",
    "WAWebGroupType",
    "WAWebMiscErrors",
    "WAWebNoop",
    "WAWebPhotoPickerConstants",
    "WAWebPhotoPickerLoadable.react",
    "WAWebProfilePicThumbAction",
    "WAWebWamNumberToPreciseSizeBucket",
    "react",
    "stylex",
    "useWAWebForceUpdate",
    "useWAWebListener",
    "useWAWebModelValues",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d = c || (c = o("react")),
      m = c.useState;
    function p(t) {
      "use no forget";
      var n,
        a,
        i,
        l = t.HoverIcon,
        c = t.chat,
        p = t.forceClickable,
        _ = p === void 0 ? !1 : p,
        f = t.readOnly,
        g = f === void 0 ? !1 : f,
        h = t.showAddIconOverlay,
        y = h === void 0 ? !1 : h,
        C = t.showHiddenSubgroupIcon,
        b = C === void 0 ? !1 : C,
        v = t.size,
        S = t.testid,
        R = t.xstyle,
        L = o("useWAWebModelValues").useModelValues(c, [
          "isReadOnly",
          "formattedTitle",
        ]),
        E = o("useWAWebModelValues").useModelValues(c.contact, [
          "id",
          "profilePicThumb",
        ]),
        k = c.contact.getProfilePicThumb(),
        I = o("useWAWebModelValues").useModelValues(k, ["imgFull"]),
        T = o("useWAWebModelValues").useModelValues(
          r("WANullthrows")(c.groupMetadata),
          ["groupType", "size"],
        ),
        D = (n = c.groupMetadata) == null ? void 0 : n.participants,
        x = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
      o("useWAWebListener").useListener(
        D,
        "bulk_add bulk_remove reset sort change:isAdmin change:isSuperAdmin",
        x,
      );
      var $ = (a = D == null ? void 0 : D.length) != null ? a : 0,
        P = (i = T == null ? void 0 : T.size) != null ? i : 0,
        N = D != null && D.iAmAdmin() ? $ : P,
        M = m(!1),
        w = M[0],
        A = M[1],
        F = m(!1),
        O = F[0],
        B = F[1],
        W = r("useWAWebUnmountSignal")(),
        q = function (n, a) {
          B(!0);
          var t;
          (n && a
            ? (t = o("WAWebProfilePicThumbAction").setProfilePic(I, n, a))
            : (t = o("WAWebProfilePicThumbAction").deleteProfilePic(I)),
            r("WAPromiseRaceAbort")(t, W)
              .catch(o("WAAbortError").catchAbort(r("WAWebNoop")))
              .catch(
                o("WAFilteredCatch").filteredCatch(
                  o("WAWebMiscErrors").ActionError,
                  function (t) {
                    (o("WALogger").WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "GroupInfoDrawer: failed to set/delete group image",
                        ])),
                    ),
                      A(!w));
                  },
                ),
              )
              .finally(function () {
                B(!1);
              }));
        },
        U = function (t, n, r) {
          var e,
            a,
            i =
              c == null || (e = c.groupMetadata) == null ? void 0 : e.creation,
            l = new Date((i != null ? i : 0) * 1e3),
            s = new Intl.DateTimeFormat("en", { year: "numeric" }).format(l),
            u = new Intl.DateTimeFormat("en", { month: "2-digit" }).format(l),
            d = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(l),
            m = i != null ? s + "-" + u + "-" + d : "",
            p = o(
              "WAWebWamNumberToPreciseSizeBucket",
            ).numberToPreciseSizeBucket(N),
            _ = (a = D == null ? void 0 : D.iAmAdmin()) != null ? a : !1;
          new (o(
            "WAWebGroupProfilePictureWamEvent",
          ).GroupProfilePictureWamEvent)({
            groupCreationDs: m,
            groupProfileAction: t,
            preciseGroupSizeBucket: p,
            isAdmin: _,
            hasProfilePicture: n,
            profilePictureType: r,
          }).commit();
        },
        V =
          T.groupType ===
          o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP,
        H = o("WAWebPhotoPickerConstants").PhotoPickerType.GROUP;
      V
        ? (H = o("WAWebPhotoPickerConstants").PhotoPickerType
            .DEFAULT_ANNOUNCEMENT_GROUP)
        : T.groupType === o("WAWebGroupType").GroupType.LINKED_GENERAL_GROUP &&
          o("WAWebCommunityGatingUtils").communityGeneralChatUIEnabled() &&
          (H = o("WAWebPhotoPickerConstants").PhotoPickerType.GENERAL_GROUP);
      var G =
          g ||
          L.isReadOnly ||
          (I && !I.canDelete() && !I.canSet()) ||
          o("WAWebChatGroupUtils").isSupportGroup(L) ||
          V ||
          T.isSuspendedOrTerminated(),
        z = s._(/*BTDS*/ 'Group profile picture for "{group-name}"', [
          s._param("group-name", L.title()),
        ]);
      return d.jsx(
        "div",
        babelHelpers.extends({}, (u || (u = r("stylex"))).props(R), {
          "aria-label": z,
          children: d.jsx(
            o("WAWebPhotoPickerLoadable.react").PhotoPickerLoadable,
            {
              type: H,
              id: E.id,
              attachToChat: !0,
              forceClickable: _,
              pending: O,
              startImage: I == null ? void 0 : I.imgFull,
              readOnly: G,
              onImageSet: q,
              sendGroupProfilePictureLoggingEvent: U,
              HoverIcon: l,
              showAddIconOverlay: y,
              showHiddenSubgroupIcon: b,
              size: v,
              testid: void 0,
            },
            String(w),
          ),
        }),
      );
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
