__d(
  "WAWebDetailImage.react",
  [
    "fbt",
    "$InternalEnum",
    "WAShiftTimer",
    "WAWebAnnouncementSpeakerIcon.react",
    "WAWebAvatarSpinner.react",
    "WAWebBizGatingUtils",
    "WAWebBotGroupGatingUtils",
    "WAWebChatCollection",
    "WAWebChatCommunityUtils",
    "WAWebChatEphemerality",
    "WAWebChatGetters",
    "WAWebChatProfilePictureGatingUtils",
    "WAWebClassnames",
    "WAWebCommonCTWAConsumerTransparency",
    "WAWebCommunityGatingUtils",
    "WAWebCommunityGeneralChatImage.react",
    "WAWebContactCollection",
    "WAWebDefaultCommunityRefreshedIcon.react",
    "WAWebDefaultContactRefreshedIcon.react",
    "WAWebDefaultGroupRefreshedIcon.react",
    "WAWebDefaultNewsletterIcon.react",
    "WAWebDefaultUserColorIcon.react",
    "WAWebDefaultUserSquareIcon.react",
    "WAWebDoubleChevronInCircleIcon.react",
    "WAWebEnvironment",
    "WAWebEphemeralityFrontendUtils",
    "WAWebFMXGatingUtils",
    "WAWebGroupType",
    "WAWebHasAcceptedBizBotTos",
    "WAWebIdleComponent.react",
    "WAWebImg.react",
    "WAWebInitialsFromNameUtils",
    "WAWebInitialsProfilePicture.react",
    "WAWebKeyboardIsKeyActivation",
    "WAWebLidMigrationUtils",
    "WAWebMetaAIIcon.react",
    "WAWebMiscErrors",
    "WAWebMiscGatingUtils",
    "WAWebMmsClientIsErrorRetryable",
    "WAWebPREGatingUtils",
    "WAWebProfilePicThumbCollection",
    "WAWebPsaVerifiedBlueIcon.react",
    "WAWebPsaVerifiedIcon.react",
    "WAWebSingleChevronInCircleIcon.react",
    "WAWebSquircleStroke.react",
    "WAWebStateUtils",
    "WAWebUISpacing",
    "WAWebUnjoinedSubgroupMetadataCollection",
    "WAWebUserPrefsMeUser",
    "WAWebWaChatPsaIcon.react",
    "WAWebWid",
    "WDSFocusStateStyles",
    "WDSIconIcVisibilityOff.react",
    "WDSIconWdsIcBroadcastMessageFill.react",
    "WDSIconWdsIcDisappearingMessages.react",
    "cr:5981",
    "gkx",
    "isStringNullOrEmpty",
    "react",
    "stylex",
    "useLazyRef",
    "useWAWebDefaultProfileColors",
    "useWAWebEventTargetValue",
    "useWAWebForceUpdate",
    "useWAWebGroupColors",
    "useWAWebIsKeyboardUser",
    "useWAWebListener",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useEffect,
      p = d.useMemo,
      _ = d.useRef,
      f = d.useState,
      g = d.useTransition,
      h = new Set(),
      y =
        n("cr:5981") == null
          ? void 0
          : n("cr:5981").InternalStatusWarningImageOverlay,
      C = n("$InternalEnum").Mirrored([
        "ExtraSmall",
        "Small",
        "Medium",
        "Large",
        "Refresh",
        "None",
      ]),
      b = n("$InternalEnum").Mirrored(["Low", "High"]),
      v = n("$InternalEnum").Mirrored(["Circle", "Square", "Squircle"]),
      S = n("$InternalEnum").Mirrored([
        "GroupChatProfilePicture",
        "Status",
        "MediaHub",
        "GroupStatus",
      ]),
      R = {
        announcementSpeaker: { color: "x1pse0pq", $$css: !0 },
        communitySquircle: { color: "x17k9de1", $$css: !0 },
        newsletter: { color: "x17k9de1", $$css: !0 },
        avatarDefaultPSA: {
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          $$css: !0,
        },
        dimmed: { opacity: "xavfwda", $$css: !0 },
        avatar: {
          position: "x1n2onr6",
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          $$css: !0,
        },
        status: { backgroundColor: "x1gle93d", $$css: !0 },
        avatarSquare: {
          borderStartStartRadius: "x1bczwif",
          borderStartEndRadius: "x17un8ov",
          borderEndEndRadius: "x1e7945m",
          borderEndStartRadius: "x11o6v7j",
          $$css: !0,
        },
        avatarImage: {
          position: "x1n2onr6",
          display: "x1lliihq",
          width: "xh8yej3",
          height: "x5yr21d",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          objectFit: "xl1xv1r",
          objectPosition: "x115dhu7",
          opacity: "xg01cxk",
          transition: "x17vty23",
          $$css: !0,
        },
        isLoaded: { opacity: "x1hc1fzr", $$css: !0 },
        avatarImageNoTransition: { transition: "xq2gx43", $$css: !0 },
        avatarSquircle: {
          clipPath: "x1f2iure",
          borderStartStartRadius: "x1bczwif",
          borderStartEndRadius: "x17un8ov",
          borderEndEndRadius: "x1e7945m",
          borderEndStartRadius: "x11o6v7j",
          $$css: !0,
        },
        groupProfilePicture: {
          position: "x10l6tqk",
          insetInlineStart: "x1nobqc8",
          left: null,
          right: null,
          width: "xgd8bvy",
          height: "x1fgtraw",
          $$css: !0,
        },
        groupProfilePictureInBubble: {
          width: "x14qfxbe",
          height: "xc9qbxq",
          $$css: !0,
        },
        svgSize: { width: "xh8yej3", height: "x5yr21d", $$css: !0 },
        profilePictureOutlineRefreshed: {
          outline: "x4u6w88",
          outlineOffset: "x1g40iwv",
          $$css: !0,
        },
        circleIconRefreshed: {
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          backgroundColor: "x1od0jb8",
          $$css: !0,
        },
        squircleIconBackground: {
          width: "xh8yej3",
          height: "x5yr21d",
          backgroundColor: "x1od0jb8",
          $$css: !0,
        },
        avatarBorder: {
          borderTopWidth: "x1ktv7sr",
          borderInlineEndWidth: "x142x0oa",
          borderBottomWidth: "xv7zg05",
          borderInlineStartWidth: "x12dgle5",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopColor: "x16jw5py",
          borderInlineEndColor: "x13dr7gu",
          borderBottomColor: "xd9srri",
          borderInlineStartColor: "x1ia0k5z",
          $$css: !0,
        },
        avatarProfileRingBorder: {
          borderTopWidth: "x1ktv7sr",
          borderInlineEndWidth: "x142x0oa",
          borderBottomWidth: "xv7zg05",
          borderInlineStartWidth: "x12dgle5",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopColor: "x1y9zq84",
          borderInlineEndColor: "xt9xd2u",
          borderBottomColor: "x3tsejo",
          borderInlineStartColor: "x1ahzpo1",
          boxSizing: "x9f619",
          $$css: !0,
        },
        avatarDefaultAnnouncementGroup: {
          backgroundColor: "xfn3atn",
          $$css: !0,
        },
        inviteModal: {
          borderTopWidth: "x1ktv7sr",
          borderInlineEndWidth: "x142x0oa",
          borderBottomWidth: "xv7zg05",
          borderInlineStartWidth: "x12dgle5",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopColor: "x19bsprb",
          borderInlineEndColor: "x2cy9dh",
          borderBottomColor: "x1eeqclz",
          borderInlineStartColor: "x1mx0rqa",
          backgroundColor: "x16w0wmm",
          $$css: !0,
        },
        outline: {
          borderTopColor: "xx42vgk",
          borderInlineEndColor: "xbogo7e",
          borderBottomColor: "x120ee7l",
          borderInlineStartColor: "x1vb5itz",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopWidth: "x178xt8z",
          borderInlineEndWidth: "x1lun4ml",
          borderBottomWidth: "xso031l",
          borderInlineStartWidth: "xpilrb4",
          $$css: !0,
        },
        badge: {
          position: "x10l6tqk",
          insetInlineEnd: "xhu3bip",
          bottom: "x48lskh",
          zIndex: "x16uhe5s",
          boxSizing: "x9f619",
          width: "xw4jnvo",
          height: "x1qx5ct2",
          pointerEvents: "x47corl",
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          $$css: !0,
        },
        chatList: { backgroundColor: "x1280gxy", $$css: !0 },
        chatListHoveredOrActive: { background: "x8b8lpe", $$css: !0 },
        conversationHeader: { backgroundColor: "x1280gxy", $$css: !0 },
        subgroupJoinModal: {
          backgroundColor: "x1280gxy",
          width: "x1849jeq",
          height: "x1gnnpzl",
          insetInlineEnd: "xtijo5x",
          left: null,
          right: null,
          bottom: "x1ey2m1c",
          $$css: !0,
        },
        adsDataSharingIconBackground: {
          backgroundColor: "x1c7u0tx",
          $$css: !0,
        },
        badgeIconSVG: { width: "x1xp8n7a", height: "xmix8c7", $$css: !0 },
        polls: {
          borderTopWidth: "x178xt8z",
          borderInlineEndWidth: "x1lun4ml",
          borderBottomWidth: "xso031l",
          borderInlineStartWidth: "xpilrb4",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          $$css: !0,
        },
        pollsSender: {
          borderTopColor: "x3ewwah",
          borderInlineEndColor: "xzt7qbt",
          borderBottomColor: "x1xnb2cf",
          borderInlineStartColor: "xphqdy3",
          $$css: !0,
        },
        pollsReceiver: {
          borderTopColor: "xm7onvi",
          borderInlineEndColor: "xxy6lca",
          borderBottomColor: "x4728lr",
          borderInlineStartColor: "x4bbfdb",
          $$css: !0,
        },
        backgroundFill: { fill: "x1flh12g", $$css: !0 },
        primaryFill: { fill: "xvt3oi1", $$css: !0 },
        broadcastIconContainer: {
          display: "x78zum5",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          $$css: !0,
        },
        broadcastIconOuter: {
          width: "xycev2y",
          height: "x39lw6i",
          color: "xhslqc4",
          $$css: !0,
        },
        badgeIconPathSVG: { color: "xhslqc4", $$css: !0 },
        dataSharingUpdatedStyleIcon: { color: "xrl28ub", $$css: !0 },
        dataSharingNewStyleIcon: {
          backgroundColor: "x1c7u0tx",
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          color: "xhslqc4",
          $$css: !0,
        },
        subgroupJoinModalSvgStyle: {
          width: "xgd8bvy",
          height: "x1fgtraw",
          $$css: !0,
        },
        groupProfilePictureSticky: {
          position: "x7wzq59",
          top: "x1eu8d0j",
          $$css: !0,
        },
      },
      L = 100;
    function E(t) {
      var n,
        a = t.alt,
        i = t.id,
        l = t.imgClassName,
        s = t.imgXstyle,
        u = t.loader,
        d = u === void 0 ? !1 : u,
        p = t.loadingAnimation,
        y = p === void 0 ? !0 : p,
        C = t.onLoad,
        b = t.profilePicThumb,
        S = t.profilePicThumbImg,
        E = t.spinnerClassName,
        k = t.spinnerSize,
        I = t.spinnerXstyle,
        T = t.theme,
        D = f(!1),
        x = D[0],
        $ = D[1],
        P = f(S),
        N = P[0],
        M = P[1],
        w =
          N != null && o("WAWebPREGatingUtils").isPREChatMovingEnabled()
            ? h.has(N)
            : !1,
        A = f(
          w
            ? !1
            : (i instanceof r("WAWebWid") &&
                (i == null ? void 0 : i.isBot())) !== !0,
        ),
        F = A[0],
        O = A[1],
        B = f(w),
        W = B[0],
        q = B[1],
        U = _(!!S),
        V = _(!1),
        H = T !== "business",
        G = r("useLazyRef")(function () {
          return d && H
            ? new (o("WAShiftTimer").ShiftTimer)(function () {
                $(!0);
              })
            : null;
        }),
        z = g(),
        j = z[0],
        K = z[1];
      S !== N && (M(S), O(!0), q(!1));
      var Q = function (t) {
          K(function () {
            var e;
            ((e = G.current) == null || e.cancel(),
              b.markMms4HostSuccess(),
              O(!1),
              q(!0),
              C == null || C());
            var n = t.target;
            N != null &&
              n instanceof HTMLImageElement &&
              n.complete &&
              o("WAWebPREGatingUtils").isPREChatMovingEnabled() &&
              h.add(N);
          });
        },
        X = function (t) {
          var e;
          if (
            ((e = G.current) == null || e.cancel(),
            t instanceof o("WAWebMiscErrors").ServerStatusError)
          )
            switch (t.status) {
              case 403:
                (b.markStale({ eurl: !0 }),
                  V.current || ((V.current = !0), b.validate()));
                break;
              case 410:
                b.markStale();
                break;
              default:
                o("WAWebMmsClientIsErrorRetryable").isRetriableStatusCode(
                  t.status,
                ) && b.markMms4HostFailure();
                break;
            }
          (O(!1), q(!1));
        };
      m(
        function () {
          var e,
            t = G;
          return (
            (e = t.current) == null || e.onOrAfter(L),
            function () {
              var e;
              (e = t.current) == null || e.cancel();
            }
          );
        },
        [b, G],
      );
      var Y = function () {
          return H
            ? !!d && x && F && !(!o("WAWebStateUtils").unproxy(b).stale && !N)
            : !1;
        },
        J = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          ((n = {}), (n[l] = typeof l == "string"), n),
          (e || (e = r("stylex")))(
            y === !1 && U.current && R.avatarImageNoTransition,
            R.avatarImage,
            t.shape === v.Square && R.avatarSquare,
            t.shape === v.Squircle && R.avatarSquircle,
            !F && R.isLoaded,
            t.shape !== v.Squircle && R.profilePictureOutlineRefreshed,
            s,
          ),
        ),
        Z,
        ee;
      if (
        (Y() &&
          (Z = c.jsx(r("WAWebAvatarSpinner.react"), {
            className: E,
            xstyle: I,
            size: k,
          })),
        !r("isStringNullOrEmpty")(N))
      ) {
        var te = c.jsx(r("WAWebImg.react"), {
          src: N,
          hasPrivacyChecks: !0,
          crossOrigin: !1,
          className: J,
          draggable: !1,
          onLoad: Q,
          onError: X,
          alt: a,
        });
        t.shape === v.Squircle
          ? (ee = c.jsxs("div", {
              className: "x1n2onr6 xh8yej3 x5yr21d x1f2iure",
              children: [te, c.jsx(r("WAWebSquircleStroke.react"), {})],
            }))
          : (ee = te);
      }
      var ne = W ? null : t.defaultIcon;
      return (
        y === !1 && (ne = ee != null ? null : t.defaultIcon),
        c.jsxs(c.Fragment, { children: [Z, ne, ee] })
      );
    }
    E.displayName = E.name + " [from " + i.id + "]";
    function k(e) {
      var t = o("useWAWebModelValues").useModelValues(e.profilePicThumb, [
        "imgFull",
      ]);
      return c.jsx(
        E,
        babelHelpers.extends({}, e, { profilePicThumbImg: t.imgFull }),
      );
    }
    k.displayName = k.name + " [from " + i.id + "]";
    function I(e) {
      var t = o("useWAWebModelValues").useModelValues(e.profilePicThumb, [
        "img",
      ]);
      return c.jsx(
        E,
        babelHelpers.extends({}, e, { profilePicThumbImg: t.img }),
      );
    }
    I.displayName = I.name + " [from " + i.id + "]";
    function T(e) {
      return e === "group_profile_picture" ||
        e === "group_profile_picture_in_bubble"
        ? S.GroupChatProfilePicture
        : e === "status"
          ? S.Status
          : e === "media_hub"
            ? S.MediaHub
            : e === "group_status"
              ? S.GroupStatus
              : null;
    }
    var D = 28;
    function x(e) {
      if (typeof e == "string")
        switch (e) {
          case C.ExtraSmall:
            return 40;
          case C.Small:
            return 49;
          case C.Medium:
            return 100;
          case C.Large:
            return 200;
          case C.Refresh:
            return 128;
          case C.None:
            return;
        }
      else return e;
    }
    function $(t) {
      "use no forget";
      var n,
        a,
        i,
        l,
        u,
        d = t.id,
        m = t.size,
        f = t.quality,
        g = f === void 0 ? b.Low : f,
        S = t.loader,
        L = t.onClick,
        E = t.onLoad,
        $ = t.quoted,
        A = t.shape,
        F = t.border,
        O = t.waitIdle,
        B = t.ephemeralIcon,
        W = t.isHoveredOrActive,
        q = W === void 0 ? !1 : W,
        U = t.checkmarkIcon,
        V = t.hiddenSubgroupIcon,
        H = t.aiGroupIcon,
        G = t.theme,
        z = t.alt,
        j = t.xstyle,
        K = t.authorColor,
        Q = t.loadPicture,
        X = Q === void 0 ? !0 : Q,
        Y = t.loadAnimation,
        J = Y === void 0 ? !0 : Y,
        Z = t.tabIndex,
        ee = t.ariaLabel,
        te = t.testId,
        ne = t.tabOrder,
        re = t.showOutline,
        oe = re === void 0 ? !1 : re,
        ae = t.enableAdsDataSharingIcon,
        ie = t.enableBizAiDataSharingIcon,
        le = ie === void 0 ? !1 : ie,
        se = t.groupProfilePictureSticky,
        ue = se === void 0 ? !1 : se,
        ce = t.customDimensionsStyle,
        de = ce === void 0 ? !1 : ce,
        me = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(),
        pe = _(null),
        _e = r("useWAWebIsKeyboardUser")(),
        fe = _e.isKeyboardUser,
        ge = o("WAWebHasAcceptedBizBotTos").useHasAcceptedBizBotTos(),
        he = p(
          function () {
            var e = d,
              t = o("WAWebChatCollection").ChatCollection.get(e);
            if (!t && e.isRegularUser())
              try {
                var n = e.isLid()
                  ? o("WAWebLidMigrationUtils").toPn(e)
                  : o("WAWebLidMigrationUtils").toLid(e);
                n &&
                  ((t = o("WAWebChatCollection").ChatCollection.get(n)),
                  t && (e = n));
              } catch (e) {}
            return { id: e, chat: t };
          },
          [d],
        ),
        ye = he.chat,
        Ce = he.id,
        be;
      typeof m == "number"
        ? (be = m > 0 ? m : C.Small)
        : (be = m != null ? m : C.Small);
      var ve = de
        ? {}
        : {
            height: (n = x(be)) != null ? n : void 0,
            width: (a = x(be)) != null ? a : void 0,
          };
      L && (ve.cursor = "pointer");
      var Se, Re;
      if (
        ye != null &&
        (i = ye.groupMetadata) != null &&
        (i = i.participants) != null &&
        i.iAmMember()
      ) {
        if (o("WAWebChatGetters").getIsGroup(ye)) {
          var Le;
          ((Se = (Le = ye.groupMetadata) == null ? void 0 : Le.groupType),
            (Re = ye.groupMetadata));
        }
      } else {
        var Ee = r("WAWebUnjoinedSubgroupMetadataCollection").get(
          Ce.toString(),
        );
        ((Se = Ee == null ? void 0 : Ee.groupType), (Re = Ee));
      }
      (o("useWAWebListener").useListener(
        ye != null && o("WAWebChatGetters").getIsGroup(ye) ? Re : ye,
        "change:ephemeralDuration",
        me,
      ),
        o("useWAWebListener").useListener(ye, "change:isSenderSuspicious", me));
      var ke = r("useWAWebEventTargetValue")(
          Re,
          "change:hiddenSubgroup",
          function () {
            var e;
            return ((e = Re) == null ? void 0 : e.hiddenSubgroup) === !0;
          },
        ),
        Ie = (e || (e = r("stylex"))).props(
          R.avatar,
          G === "status" && R.status,
          A === v.Square && R.avatarSquare,
          A === v.Squircle && R.avatarSquircle,
          G === "group_profile_picture" && R.groupProfilePicture,
          G === "group_profile_picture_in_bubble" &&
            R.groupProfilePictureInBubble,
          G === "status_profile_photo_ring" && R.avatarProfileRingBorder,
          G === "invite_modal" && R.inviteModal,
          (G === "polls_sender" || G === "polls_receiver") && R.polls,
          G === "polls_sender" && R.pollsSender,
          G === "polls_receiver" && R.pollsReceiver,
          o("WAWebChatCommunityUtils").isIntegrityDeactivatedCommunity(ye) &&
            R.dimmed,
          F === !0 && R.avatarBorder,
          Se === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP &&
            R.avatarDefaultAnnouncementGroup,
          L != null &&
            fe &&
            o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
          oe && R.outline,
          G === "group_profile_picture" && ue && R.groupProfilePictureSticky,
          j,
        ),
        Te = babelHelpers.extends({}, Ie.style, ve),
        De = function (t) {
          if (r("WAWebKeyboardIsKeyActivation")(t)) {
            var e;
            (e = pe.current) == null || e.click();
          }
        },
        xe =
          L != null
            ? { tabIndex: Z, role: "button", "aria-label": ee, onKeyDown: De }
            : {},
        $e = T(G),
        Pe = c.jsx(N, {
          id: Ce,
          quoted: $,
          groupType: Se,
          theme: $e,
          authorColor: K,
          shape: t.shape,
        });
      if (
        (G === "group_profile_picture" ||
          G === "typing_indicator" ||
          G === "reaction_details") &&
        o(
          "WAWebChatProfilePictureGatingUtils",
        ).shouldDisplayInitialsInProfilePicture(Ce)
      ) {
        var Ne = o("WAWebContactCollection").ContactCollection.get(Ce);
        if (Ne) {
          var Me = o("WAWebInitialsFromNameUtils").getInitialsFromContact(Ne);
          (Me.firstInitial != null || Me.secondInitial != null) &&
            (Pe = c.jsx(
              o("WAWebInitialsProfilePicture.react").InitialsProfilePicture,
              {
                initialsData: Me,
                theme: o("WAWebInitialsProfilePicture.react").ThemeType
                  .GroupChatProfilePicture,
                backgroundColorId: K != null ? K : 1,
                wid: Ce,
              },
            ));
        }
      }
      var we = function () {
          var e = null,
            t;
          X
            ? (t = o(
                "WAWebProfilePicThumbCollection",
              ).ProfilePicThumbCollection.gadd(Ce))
            : (t = o(
                "WAWebProfilePicThumbCollection",
              ).ProfilePicThumbCollection.get(Ce));
          var n =
            ye != null &&
            !ye.trusted &&
            ye.isSenderSuspicious === !0 &&
            o("WAWebFMXGatingUtils").isSuspiciousFmxEnabled();
          return (
            n
              ? (e = Pe)
              : t
                ? g === b.High
                  ? (e = c.jsx(k, {
                      profilePicThumb: t,
                      defaultIcon: Pe,
                      loader: S,
                      onLoad: E,
                      alt: z,
                      shape: A,
                      id: Ce,
                    }))
                  : (e = c.jsx(I, {
                      profilePicThumb: t,
                      defaultIcon: Pe,
                      loader: S,
                      onLoad: E,
                      alt: z,
                      loadingAnimation: J,
                      shape: A,
                      id: Ce,
                    }))
                : (e = Pe),
            c.jsxs(
              "div",
              babelHelpers.extends(
                { "data-testid": void 0, ref: pe, "data-tab": ne },
                xe,
                Ie,
                {
                  style: Te,
                  onClick: L,
                  children: [
                    e,
                    !r("gkx")("26258") && (typeof m != "number" || m >= D) && y
                      ? c.jsx(y, { id: Ce })
                      : null,
                  ],
                },
              ),
            )
          );
        },
        Ae = p(
          function () {
            if (!X) return !1;
            var e = o(
                "WAWebProfilePicThumbCollection",
              ).ProfilePicThumbCollection.get(Ce),
              t = e == null ? void 0 : e.img;
            return t != null && t !== "" ? (h.add(t), !0) : !1;
          },
          [Ce, X],
        ),
        Fe = (!r("WAWebEnvironment").isWindows || O === !0) && !Ae,
        Oe = Fe
          ? c.jsx(r("WAWebIdleComponent.react"), {
              id: Ce,
              onComplex: we,
              waitIdle: O,
              children: c.jsx(
                "div",
                babelHelpers.extends({ ref: pe }, xe, Ie, {
                  style: Te,
                  onClick: L,
                  children: Pe,
                }),
              ),
            })
          : we();
      if (t.emojiBadge != null && o("WAWebUserPrefsMeUser").isMeAccount(Ce))
        return c.jsxs("div", {
          className: "x1n2onr6",
          "aria-label": s._(/*BTDS*/ "Profile picture, text status emoji set"),
          children: [
            c.jsx("div", {
              className:
                "x10l6tqk xhu3bip x48lskh x16uhe5s x9f619 xw4jnvo x1qx5ct2 x47corl x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1h3rtpe",
              children: t.emojiBadge,
            }),
            Oe,
          ],
        });
      var Be =
          (l =
            ye == null || (u = ye.contact.businessProfile) == null
              ? void 0
              : u.isBizBot1p) != null
            ? l
            : !1,
        We =
          ge &&
          o("WAWebBizGatingUtils").isUpdatedConsumerDisclosureUiRowEnabled(),
        qe = le && Be && We,
        Ue = M(B, ye),
        Ve = H === "conversation-header" && w(ye),
        He =
          ae === !0 &&
          ye != null &&
          o(
            "WAWebCommonCTWAConsumerTransparency",
          ).shouldShowConsumerTransparencyDisclosure(ye),
        Ge = V != null && U == null && ke;
      if (qe || Ue === !0 || U || He || Ge || Ve) {
        var ze,
          je = (ze = B != null ? B : U) != null ? ze : V;
        return c.jsxs("div", {
          className: "x1n2onr6",
          "aria-hidden": "true",
          children: [
            c.jsx(
              "div",
              babelHelpers.extends(
                {},
                (e || (e = r("stylex"))).props(
                  R.badge,
                  o("WAWebUISpacing").uiPadding.all1,
                  je === "chat-list" && !q && R.chatList,
                  je === "chat-list" && q && R.chatListHoveredOrActive,
                  je === "conversation-header" && R.conversationHeader,
                  je === "subgroup-join-modal" && R.subgroupJoinModal,
                  He && R.adsDataSharingIconBackground,
                ),
                {
                  children: c.jsx(P, {
                    iconScheme: je,
                    shouldShowEphemeralIcon: Ue,
                    shouldShowHiddenSubgroupIcon: Ge,
                    shouldShowAdsDataSharingIcon: He,
                    shouldShowBizAiDataSharingIcon: qe,
                    shouldShowAIGroupIcon: Ve,
                  }),
                },
              ),
            ),
            Oe,
          ],
        });
      }
      return Oe;
    }
    $.displayName = $.name + " [from " + i.id + "]";
    function P(e) {
      var t = e.iconScheme,
        n = e.shouldShowAdsDataSharingIcon,
        a = n === void 0 ? !1 : n,
        i = e.shouldShowAIGroupIcon,
        l = i === void 0 ? !1 : i,
        s = e.shouldShowBizAiDataSharingIcon,
        u = s === void 0 ? !1 : s,
        d = e.shouldShowEphemeralIcon,
        m = d === void 0 ? !1 : d,
        p = e.shouldShowHiddenSubgroupIcon,
        _ = p === void 0 ? !1 : p;
      if (u)
        return c.jsx(
          o("WAWebDoubleChevronInCircleIcon.react").DoubleChevronInCircleIcon,
          {
            iconXstyle: [
              R.svgSize,
              R.badgeIconSVG,
              R.dataSharingUpdatedStyleIcon,
            ],
          },
        );
      if (a)
        return c.jsx(
          o("WAWebSingleChevronInCircleIcon.react").SingleChevronInCircleIcon,
          {
            iconXstyle: [R.svgSize, R.badgeIconSVG, R.dataSharingNewStyleIcon],
          },
        );
      if (
        o("WAWebBotGroupGatingUtils").isOpenGroupBotParticipantAddEnabled() &&
        l
      )
        return c.jsx(r("WAWebMetaAIIcon.react"), { height: 17, width: 17 });
      var f = o("WAWebMiscGatingUtils").isBlueEnabled()
          ? o("WAWebPsaVerifiedBlueIcon.react").PsaVerifiedBlueIcon
          : o("WAWebPsaVerifiedIcon.react").PsaVerifiedIcon,
        g;
      m === !0
        ? (g = r("WDSIconWdsIcDisappearingMessages.react"))
        : _
          ? (g = r("WDSIconIcVisibilityOff.react"))
          : (g = f);
      var h = {
        xstyle: R.badgeIconPathSVG,
        iconXstyle: [
          R.svgSize,
          R.badgeIconSVG,
          t === "subgroup-join-modal" && R.subgroupJoinModalSvgStyle,
        ],
      };
      return m === !0
        ? c.jsx(
            r("WDSIconWdsIcDisappearingMessages.react"),
            babelHelpers.extends({ testid: void 0 }, h),
          )
        : c.jsx(g, babelHelpers.extends({}, h));
    }
    P.displayName = P.name + " [from " + i.id + "]";
    function N(t) {
      var n = t.authorColor,
        a = t.groupType,
        i = t.id,
        l = t.quoted,
        s = t.shape,
        u = t.theme,
        d = t.xstyle,
        m = o("useWAWebDefaultProfileColors").useDefaultProfileColors(i),
        p = m.background,
        _ = m.foreground,
        f = o("useWAWebGroupColors").useGroupsColorStyle(
          n != null ? n : 1,
          "color",
        ),
        g = c.jsx(
          o("WAWebDefaultContactRefreshedIcon.react")
            .DefaultContactRefreshedIcon,
          {
            iconXstyle: [
              R.svgSize,
              R.circleIconRefreshed,
              R.profilePictureOutlineRefreshed,
              p,
              d,
            ],
            "aria-hidden": !0,
            innerStyles: { primary: _ != null ? _ : R.primaryFill },
          },
        );
      r("WAWebWid").isUser(i) && !r("WAWebWid").isPSA(i) && l
        ? (g = c.jsx(
            o("WAWebDefaultUserSquareIcon.react").DefaultUserSquareIcon,
            {
              iconXstyle: [R.svgSize, d],
              "aria-hidden": !0,
              innerStyles: {
                primary: R.primaryFill,
                background: R.backgroundFill,
              },
            },
          ))
        : r("WAWebWid").isGroup(i)
          ? a === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
            ? (g = c.jsx(
                o("WAWebAnnouncementSpeakerIcon.react").AnnouncementSpeakerIcon,
                {
                  iconXstyle: [R.svgSize, R.announcementSpeaker, d],
                  directional: !0,
                  "aria-hidden": !0,
                },
              ))
            : a === o("WAWebGroupType").GroupType.COMMUNITY || s === v.Squircle
              ? (g = c.jsxs("div", {
                  className: "x1n2onr6 xh8yej3 x5yr21d x1f2iure",
                  children: [
                    c.jsx(
                      "div",
                      babelHelpers.extends(
                        {},
                        (e || (e = r("stylex"))).props(
                          R.squircleIconBackground,
                          p,
                        ),
                        {
                          children: c.jsx(
                            o("WAWebDefaultCommunityRefreshedIcon.react")
                              .DefaultCommunityRefreshedIcon,
                            {
                              iconXstyle: [R.svgSize, R.communitySquircle, d],
                              "aria-hidden": !0,
                              innerStyles: {
                                primary: _ != null ? _ : R.primaryFill,
                              },
                            },
                          ),
                        },
                      ),
                    ),
                    c.jsx(r("WAWebSquircleStroke.react"), {}),
                  ],
                }))
              : a === o("WAWebGroupType").GroupType.LINKED_GENERAL_GROUP &&
                  o("WAWebCommunityGatingUtils").communityGeneralChatUIEnabled()
                ? (g = c.jsx(
                    o("WAWebCommunityGeneralChatImage.react")
                      .CommunityGeneralChatImage,
                    {},
                  ))
                : (g = c.jsx(
                    o("WAWebDefaultGroupRefreshedIcon.react")
                      .DefaultGroupRefreshedIcon,
                    {
                      iconXstyle: [
                        R.svgSize,
                        R.circleIconRefreshed,
                        R.profilePictureOutlineRefreshed,
                        p,
                        d,
                      ],
                      "aria-hidden": !0,
                      innerStyles: { primary: _ != null ? _ : R.primaryFill },
                    },
                  ))
          : r("WAWebWid").isBroadcast(i)
            ? (g = c.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  (e || (e = r("stylex"))).props(
                    R.svgSize,
                    R.circleIconRefreshed,
                    R.profilePictureOutlineRefreshed,
                    R.broadcastIconContainer,
                    d,
                  ),
                  {
                    children: c.jsx(
                      r("WDSIconWdsIcBroadcastMessageFill.react"),
                      {
                        xstyle: R.broadcastIconOuter,
                        iconXstyle: R.svgSize,
                        "aria-hidden": !0,
                      },
                    ),
                  },
                ),
              ))
            : r("WAWebWid").isPSA(i)
              ? (g = c.jsx(o("WAWebWaChatPsaIcon.react").WaChatPsaIcon, {
                  iconXstyle: [R.svgSize, R.avatarDefaultPSA, d],
                  "aria-hidden": !0,
                }))
              : r("WAWebWid").isNewsletter(i) &&
                (g = c.jsx(
                  o("WAWebDefaultNewsletterIcon.react").DefaultNewsletterIcon,
                  {
                    iconXstyle: [R.svgSize, R.newsletter, d],
                    "aria-hidden": !0,
                    innerStyles: {
                      primary: R.primaryFill,
                      background: R.backgroundFill,
                    },
                  },
                ));
      var h = c.createElement(
        "div",
        babelHelpers.extends(
          {},
          {
            0: {
              className:
                "x10l6tqk x13vifvy x1o0tod x78zum5 x6s0dn4 xl56j7k xh8yej3 x5yr21d",
            },
            4: {
              className:
                "x10l6tqk x13vifvy x1o0tod x78zum5 x6s0dn4 xl56j7k xh8yej3 x5yr21d xfimr68 x1jpgh95",
            },
            2: {
              className:
                "x10l6tqk x13vifvy x1o0tod x78zum5 x6s0dn4 xl56j7k xgd8bvy x1fgtraw",
            },
            6: {
              className:
                "x10l6tqk x13vifvy x1o0tod x78zum5 x6s0dn4 xl56j7k xfimr68 x1jpgh95 xgd8bvy x1fgtraw",
            },
            1: {
              className:
                "x13vifvy x1o0tod x6s0dn4 xl56j7k xh8yej3 x5yr21d x1n2onr6 x1lliihq",
            },
            5: {
              className:
                "x13vifvy x1o0tod x6s0dn4 xl56j7k xh8yej3 x5yr21d xfimr68 x1jpgh95 x1n2onr6 x1lliihq",
            },
            3: {
              className:
                "x13vifvy x1o0tod x6s0dn4 xl56j7k xgd8bvy x1fgtraw x1n2onr6 x1lliihq",
            },
            7: {
              className:
                "x13vifvy x1o0tod x6s0dn4 xl56j7k xfimr68 x1jpgh95 xgd8bvy x1fgtraw x1n2onr6 x1lliihq",
            },
          }[
            ((u === S.Status) << 2) |
              ((u === S.MediaHub) << 1) |
              ((u === S.GroupStatus) << 0)
          ],
          { key: "default" },
        ),
        g,
      );
      return (
        u === S.GroupChatProfilePicture &&
          (h = c.jsx(
            "div",
            {
              className:
                "x10l6tqk x13vifvy x1o0tod x78zum5 x6s0dn4 xl56j7k xh8yej3 x5yr21d",
              children: c.jsx(
                o("WAWebDefaultUserColorIcon.react").DefaultUserColorIcon,
                { iconXstyle: [R.svgSize, d], xstyle: f },
              ),
            },
            "default",
          )),
        h
      );
    }
    N.displayName = N.name + " [from " + i.id + "]";
    function M(e, t) {
      return !!(
        e != null &&
        t &&
        o("WAWebChatEphemerality").isEphemeralSettingOn(t) &&
        !o("WAWebEphemeralityFrontendUtils").isEphemeralityDisabledInUIForChat(
          t,
        )
      );
    }
    function w(e) {
      var t;
      return (
        o("WAWebBotGroupGatingUtils").isOpenGroupBotParticipantAddEnabled() &&
        (e == null || (t = e.groupMetadata) == null
          ? void 0
          : t.isOpenBotGroup) === !0
      );
    }
    ((l.DetailImageSize = C),
      (l.DetailImageQuality = b),
      (l.DetailImageShape = v),
      (l.DefaultIconThemeType = S),
      (l.DetailImageCommon = E),
      (l.getSize = x),
      (l.DetailImage = $),
      (l.ImageIcon = P),
      (l.DefaultIcon = N));
  },
  226,
);
