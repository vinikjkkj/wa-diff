__d(
  "BaseLink.react",
  [
    "BaseLinkDefaultTargetContext",
    "BaseLinkNestedPressableContext",
    "BaseNestedPressableHack_DO_NOT_USE.react",
    "CometCustomLinkshimHashContext",
    "CometLinkShimUtils",
    "CometLinkTrackingUtils",
    "CometProductAttributionContext",
    "CometTrackingCodeContext",
    "CometTrackingNodesContext",
    "ConstUriUtils",
    "NavChainContentContext",
    "Pressable.react",
    "PressableText.react",
    "RecoverableViolationWithComponentStack.react",
    "appendPersistQueryParamsToUrl",
    "isCometRouterUrl",
    "isTrustedDestination",
    "mergeRefs",
    "react",
    "react-compiler-runtime",
    "useApplyEndpointModifiersToHref",
    "useAttributionSourceForClick",
    "useCometErrorProject",
    "useCometRouterDispatcher",
    "useCometRouterLinkEventHandlers",
    "useCometRouterLinkShimEventHandlers",
    "useCurrentRoute",
    "useFeedPressEventHandler",
    "useTransformRelativeUri",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useContext,
      m = u.useMemo,
      p = u.useRef;
    function _(e) {
      var t = o("react-compiler-runtime").c(2),
        n = e.children,
        a;
      return (
        t[0] !== n
          ? ((a = s.jsx(r("BaseLinkNestedPressableContext").Provider, {
              value: !0,
              children: n,
            })),
            (t[0] = n),
            (t[1] = a))
          : (a = t[1]),
        a
      );
    }
    function f(e) {
      var t,
        n = e.ref,
        a = e["aria-activedescendant"],
        i = e["aria-checked"],
        l = e["aria-controls"],
        u = e["aria-current"],
        f = e["aria-describedby"],
        h = e["aria-expanded"],
        y = e["aria-haspopup"],
        C = e["aria-hidden"],
        b = e["aria-invalid"],
        v = e["aria-label"],
        S = e["aria-labelledby"],
        R = e["aria-owns"],
        L = e["aria-selected"],
        E = e.attributionsrc,
        k = e.brid,
        I = e.children,
        T = e.className_DEPRECATED,
        D = e.disabled,
        x =
          e.disableLinkShimAndTracking_DO_NOT_USE_OR_SEE_YOU_AT_THE_PRIVACY_SEV,
        $ =
          e.disableLinkShimForFollowLinkButton_DO_NOT_USE_OR_SEE_YOU_AT_THE_PRIVACY_SEV,
        P = e.display,
        N = P === void 0 ? "inline" : P,
        M = e.download,
        w = e.draggable,
        A = e.fbclid,
        F = e.focusable,
        O = e.href,
        B = e.id,
        W = e.label,
        q = e.lynxMode,
        U = e.onBlur,
        V = e.onClick,
        H = e.onContextMenu,
        G = e.onFocus,
        z = e.onFocusChange,
        j = e.onFocusVisibleChange,
        K = e.onHoverChange,
        Q = e.onHoverEnd,
        X = e.onHoverMove,
        Y = e.onHoverStart,
        J = e.onNavigate_DEPRECATED_FIXME,
        Z = e.onNavigationTransitioning,
        ee = e.onPressChange,
        te = e.onPressEnd,
        ne = e.onPressStart,
        re = e.onTransitionOptimistic,
        oe = e.passthroughProps,
        ae = e.prefetchQueriesOnHover,
        ie = e.prefetchQueriesOnMount_I_KNOW_WHAT_IM_DOING,
        le = e.preloadCodeOnMount,
        se = e.preserveQueryInShim,
        ue = e.preventContextMenu,
        ce = e.preventLocalNavigation,
        de = e.productAttribution,
        me = e.rel,
        pe = e.replace,
        _e = e.role,
        fe = e.routeTarget,
        ge = e.style,
        he = e.suppressFocusRing,
        ye = e.suppressHydrationWarning,
        Ce = e.target,
        be = e.testid,
        ve = e.testOnly_pressed,
        Se = ve === void 0 ? !1 : ve,
        Re = e.traceParams,
        Le = e.xstyle,
        Ee = r("useCometRouterDispatcher")(),
        ke = p(null),
        Ie = d(r("BaseLinkDefaultTargetContext")),
        Te = d(r("CometTrackingNodesContext")),
        De = d(r("NavChainContentContext")),
        xe = d(r("CometTrackingCodeContext")),
        $e = xe.click_tracking_linkshim_cb,
        Pe = xe.encrypted_click_tracking,
        Ne = xe.encrypted_tracking,
        Me = d(r("CometProductAttributionContext")),
        we = d(
          o("CometCustomLinkshimHashContext").CometCustomLinkshimHashContext,
        ),
        Ae = c(
          function (e) {
            return o("CometLinkTrackingUtils").decorateHrefWithTrackingInfo(
              e,
              Te,
              Pe,
            );
          },
          [Pe, Te],
        ),
        Fe = r("useApplyEndpointModifiersToHref")(),
        Oe = M === !0 || typeof M == "string",
        Be = m(
          function () {
            var e,
              t = O != null ? r("appendPersistQueryParamsToUrl")(O) : O,
              n = !1;
            if (t != null) {
              var a = o("ConstUriUtils").getUri(t);
              if (a != null) {
                var i = a.getProtocol(),
                  l = a.getDomain();
                if (!i.length && !l.length) n = !0;
                else {
                  var s = i.length ? a : a.getQualifiedUri();
                  n = s != null && r("isTrustedDestination")(s);
                }
              }
            } else n = !0;
            if (Oe || x === !0)
              return {
                clickIDAppended: !1,
                ghlEncrypted: !1,
                href: t,
                isExternalLink: !n,
                isRouterLink: !1,
                shimmed: !1,
                unshimmedHref: null,
              };
            if (t != null && r("isCometRouterUrl")(t)) {
              var u = Ae(Fe(t));
              return {
                clickIDAppended: !1,
                ghlEncrypted: !1,
                href: u,
                isExternalLink: !n,
                isRouterLink: !0,
                shimmed: !1,
                unshimmedHref: null,
              };
            }
            var c = o("CometLinkShimUtils").getLinkShimInfo(
                t,
                $e,
                Te,
                A,
                k,
                $,
                se,
                we,
              ),
              d = c.shimmed ? c.href : Ae(c.href);
            return {
              clickIDAppended: c.clickIDAppended,
              ghlEncrypted: (e = c.ghlEncrypted) != null ? e : !1,
              href: d,
              isExternalLink: !n,
              isRouterLink: !1,
              shimmed: c.shimmed,
              unshimmedHref: c.shimmed ? c.unshimmedHref : null,
            };
          },
          [$e, $, x, A, k, Oe, O, se, Te, Ae, Fe, we],
        ),
        We = Be.clickIDAppended,
        qe = Be.ghlEncrypted,
        Ue = Be.href,
        Ve = Be.isExternalLink,
        He = Be.isRouterLink,
        Ge = Be.shimmed,
        ze = Be.unshimmedHref,
        je = !1,
        Ke = !1,
        Qe = Ce;
      (Ie && (Qe = Qe != null ? Qe : Ie),
        (Ge || qe || (Ve && $ !== !0)) &&
          ((je = !0),
          (Qe = Qe != null ? Qe : "_blank"),
          (Ke =
            !!o("CometLinkShimUtils").use_rel_no_referrer && Qe === "_blank")));
      var Xe = Array.isArray(me) ? me.join(" ") : me;
      (je &&
        (Xe == null || Xe.indexOf("nofollow") < 0) &&
        (Xe = Xe != null ? Xe + " nofollow" : "nofollow"),
        Ke &&
          (Xe == null || Xe.indexOf("noreferrer") < 0) &&
          (Xe = Xe != null ? Xe + " noreferrer" : "noreferrer"));
      var Ye = r("useAttributionSourceForClick")(null, Ne[0]),
        Je = d(r("BaseLinkNestedPressableContext")),
        Ze = _e,
        et = W != null && Ze !== "none" ? W : v,
        tt = n,
        nt = V,
        rt = ne,
        ot = H;
      ((nt = r("useFeedPressEventHandler")(V, Ue)),
        (rt = r("useFeedPressEventHandler")(ne, Ue)),
        (ot = r("useFeedPressEventHandler")(H, Ue)));
      var at = m(
          function () {
            return r("mergeRefs")(tt, ke);
          },
          [tt, ke],
        ),
        it = r("useCometRouterLinkShimEventHandlers")({
          href: Ue,
          lynxMode: q,
          onContextMenu: ot,
          onHoverStart: Y,
          onPress: nt,
          shimmed: Ge,
          unshimmedHref: ze,
        }),
        lt = it.onContextMenu,
        st = it.onHoverStart,
        ut = it.onPress,
        ct = it.useOrigHref,
        dt = m(
          function () {
            return {
              linkRef: ke,
              onNavigate_DEPRECATED_FIXME: J,
              onNavigationTransitioning: Z,
              passthroughProps: oe,
              productAttributionUpdateProps: {
                fromLink: de,
                linkContext: Me,
                navChainContent: De,
                trackingNodes: Te,
              },
              replace: pe,
              target: fe,
              traceParams: Re,
            };
          },
          [ke, De, Z, oe, de, Me, Te, J, pe, fe, Re],
        ),
        mt = r("useCometRouterLinkEventHandlers")({
          dispatcherExtras: dt,
          href: Ue,
          isRouterLink: He,
          onBlur: U,
          onFocus: G,
          onHoverEnd: Q,
          onHoverMove: X,
          onHoverStart: st,
          onPress: ut,
          onPressStart: rt,
          onTransitionOptimistic: re,
          prefetchQueriesOnHover: ae,
          prefetchQueriesOnMount_I_KNOW_WHAT_IM_DOING: ie,
          preloadCodeOnMount: le,
          preventLocalNavigation: ce,
          rel: Xe,
          target: Qe,
        }),
        pt = mt.onBlur,
        _t = mt.onFocus,
        ft = mt.onHoverEnd,
        gt = mt.onHoverMove,
        ht = mt.onHoverStart,
        yt = mt.onPress,
        Ct = mt.onPressStart,
        bt = ct && Ge ? ze : Ue,
        vt =
          (He && Qe !== "_blank" && Ee != null) ||
          bt == null ||
          bt === "#" ||
          ce === !0,
        St =
          (t = r("useTransformRelativeUri")(ct && Ge ? ze : Ue)) != null
            ? t
            : "#",
        Rt = {
          accessibilityLabel: et,
          accessibilityRelationship: {
            activedescendant: a,
            controls: l,
            current: u,
            describedby: f,
            haspopup: y,
            labelledby: S,
            owns: R,
          },
          accessibilityState: {
            checked: i,
            disabled: D,
            expanded: h,
            hidden: C,
            invalid: b,
            selected: L,
          },
          className_DEPRECATED: T,
          disabled: D,
          draggable: w,
          forwardedRef: at,
          link: {
            attributionsrc: E != null ? E : Ye,
            download: M,
            rel: Xe,
            target: Qe,
            url: St,
          },
          nativeID: B,
          onBlur: pt,
          onContextMenu: lt,
          onFocus: _t,
          onFocusChange: z,
          onFocusVisibleChange: j,
          onHoverChange: K,
          onHoverEnd: ft,
          onHoverMove: gt,
          onHoverStart: ht,
          onPress: yt,
          onPressChange: ee,
          onPressEnd: te,
          onPressStart: Ct,
          preventContextMenu: ue,
          preventDefault: vt,
          style: ge,
          suppressHydrationWarning: ye === !0 || We === !0 ? !0 : void 0,
          testID: be,
          testOnly_state: {
            disabled: !1,
            focused: !1,
            focusVisible: !1,
            hovered: !1,
            pressed: Se,
          },
          xstyle: Le,
        },
        Lt;
      if (N === "block") {
        var Et =
          Ze === "button" ||
          Ze === "menuitem" ||
          Ze === "none" ||
          Ze === "switch" ||
          Ze === "checkbox" ||
          Ze === "article" ||
          Ze === "radio" ||
          Ze === "tab"
            ? Ze
            : "link";
        Lt = s.jsx(
          r("Pressable.react"),
          babelHelpers.extends({}, Rt, {
            accessibilityRole: Et,
            suppressFocusRing: he,
            tabbable: F,
            children: s.jsx(_, { children: I }),
          }),
        );
      } else {
        var kt =
          Ze === "button" ||
          Ze === "menuitem" ||
          Ze === "menuitemradio" ||
          Ze === "menuitemcheckbox" ||
          Ze === "none" ||
          Ze === "tab"
            ? Ze
            : "link";
        Lt = s.jsx(
          r("PressableText.react"),
          babelHelpers.extends({}, Rt, {
            accessibilityRole: kt,
            direction: "none",
            focusable: F,
            suppressFocusRing: he,
            children: s.jsx(_, { children: I }),
          }),
        );
      }
      return s.jsxs(s.Fragment, {
        children: [
          fe === "content" && s.jsx(g, {}),
          Je
            ? s.jsx(r("BaseNestedPressableHack_DO_NOT_USE.react"), {
                children: Lt,
              })
            : Lt,
        ],
      });
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g() {
      var e = o("react-compiler-runtime").c(3),
        t = r("useCurrentRoute")(),
        n = r("useCometErrorProject")(),
        a;
      return (
        e[0] !== t || e[1] !== n
          ? ((a =
              t != null &&
              t.isCometRootContainer !== !0 &&
              s.jsx(r("RecoverableViolationWithComponentStack.react"), {
                errorMessage:
                  "A link with target=content was rendered in a non-tab-container",
                projectName: n != null ? n : "comet_infra",
              })),
            (e[0] = t),
            (e[1] = n),
            (e[2] = a))
          : (a = e[2]),
        a
      );
    }
    l.default = f;
  },
  98,
);
