__d(
  "WAWebSubgroupSuggestionsBanner.react",
  [
    "fbt",
    "WAWebCmd",
    "WAWebConversationBanner.react",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebGroupType",
    "WAWebNux",
    "WAWebSubgroupsNuxIcon.react",
    "WAWebText.react",
    "WAWebText_DONOTUSE.react",
    "WAWebUISpacing",
    "WAWebUimUie.react",
    "react",
    "react-compiler-runtime",
    "useWAWebEventTargetValue",
    "useWAWebNux",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c = u || (u = o("react")),
      d = {
        banner: { backgroundColor: "x1280gxy", $$css: !0 },
        icon: { color: "x11askks", $$css: !0 },
      };
    function m(t) {
      var n,
        a = o("react-compiler-runtime").c(14),
        i,
        l;
      a[0] !== t
        ? ((l = t.ref),
          (i = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (a[0] = t),
          (a[1] = i),
          (a[2] = l))
        : ((i = a[1]), (l = a[2]));
      var u = i,
        m = u.chat,
        p = u.onClose,
        _ = u.subgroupSuggestionsCount,
        f;
      if (
        a[3] !== ((n = m.groupMetadata) == null ? void 0 : n.parentGroup) ||
        a[4] !== p
      ) {
        var g;
        ((f = function () {
          var e,
            t = (e = m.groupMetadata) == null ? void 0 : e.parentGroup;
          t && (o("WAWebCmd").Cmd.openCommunityPendingGroupsDrawer(t), p());
        }),
          (a[3] = (g = m.groupMetadata) == null ? void 0 : g.parentGroup),
          (a[4] = p),
          (a[5] = f));
      } else f = a[5];
      var h = f,
        y;
      a[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = c.jsx(r("WAWebFlexItem.react"), {
            xstyle: o("WAWebUISpacing").uiPadding.end18,
            children: c.jsx(o("WAWebSubgroupsNuxIcon.react").SubgroupsNuxIcon, {
              xstyle: d.icon,
              height: 20,
            }),
          })),
          (a[6] = y))
        : (y = a[6]);
      var C;
      if (a[7] !== _) {
        var b;
        ((C = c.jsxs(o("WAWebFlex.react").FlexRow, {
          align: "center",
          children: [
            y,
            c.jsx(r("WAWebFlexItem.react"), {
              children: c.jsx(o("WAWebText.react").WAWebTextMuted, {
                as: "span",
                children:
                  ((b = s._plural(_, "group_suggestions")),
                  s._(
                    /*BTDS*/ '_j{"*":"{=m0} {group_suggestions} group suggestions","_1":"{=m0} 1 group suggestion"}',
                    [
                      b,
                      s._implicitParam(
                        "=m0",
                        c.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
                          color: "accent",
                          weight: "semibold",
                          children: s._(/*BTDS*/ '_j{"*":"Review"}', [b]),
                        }),
                      ),
                    ],
                  )),
              }),
            }),
          ],
        })),
          (a[7] = _),
          (a[8] = C));
      } else C = a[8];
      var v;
      return (
        a[9] !== h || a[10] !== p || a[11] !== l || a[12] !== C
          ? ((v = c.jsx(o("WAWebUimUie.react").UIE, {
              displayName: "SubgroupSuggestionsBanner",
              escapable: !0,
              children: c.jsx(r("WAWebConversationBanner.react"), {
                ref: l,
                xstyle: d.banner,
                onClick: h,
                onClose: p,
                children: C,
              }),
            })),
            (a[9] = h),
            (a[10] = p),
            (a[11] = l),
            (a[12] = C),
            (a[13] = v))
          : (v = a[13]),
        v
      );
    }
    function p(e) {
      var t,
        n = o("react-compiler-runtime").c(3),
        a;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = ["add", "remove", "reset"]), (n[0] = a))
        : (a = n[0]);
      var i;
      n[1] !== (e == null ? void 0 : e.groupMetadata)
        ? ((i = function () {
            var t, n;
            return (t =
              e == null || (n = e.groupMetadata) == null
                ? void 0
                : n.getSubgroupSuggestions().length) != null
              ? t
              : 0;
          }),
          (n[1] = e == null ? void 0 : e.groupMetadata),
          (n[2] = i))
        : (i = n[2]);
      var l = r("useWAWebEventTargetValue")(
        e == null || (t = e.groupMetadata) == null
          ? void 0
          : t.subgroupSuggestions,
        a,
        i,
      );
      return l;
    }
    function _(e) {
      var t,
        n,
        a,
        i = o("react-compiler-runtime").c(11),
        l;
      if (i[0] !== e.groupMetadata) {
        var s;
        ((l = (s = e.groupMetadata) == null ? void 0 : s.getParentGroupChat()),
          (i[0] = e.groupMetadata),
          (i[1] = l));
      } else l = i[1];
      var u = l,
        c = p(u),
        d;
      if (i[2] !== u) {
        var m = u != null && u.id ? u.id.toString() : "";
        ((d = o("WAWebNux").getSubgroupSuggestionsBannerNuxKey(m)),
          (i[2] = u),
          (i[3] = d));
      } else d = i[3];
      var _ = d,
        f;
      i[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = ["bulk_add", "bulk_remove", "reset", "change:isAdmin"]),
          (i[4] = f))
        : (f = i[4]);
      var g;
      if (i[5] !== ((t = e.groupMetadata) == null ? void 0 : t.participants)) {
        var h;
        ((g = function () {
          var t;
          return !!((t = e.groupMetadata) != null && t.participants.iAmAdmin());
        }),
          (i[5] = (h = e.groupMetadata) == null ? void 0 : h.participants),
          (i[6] = g));
      } else g = i[6];
      var y = r("useWAWebEventTargetValue")(
          (n = e.groupMetadata) == null ? void 0 : n.participants,
          f,
          g,
        ),
        C = r("useWAWebNux")(_),
        b = C[0],
        v = C[1],
        S =
          ((a = e.groupMetadata) == null ? void 0 : a.groupType) ===
            o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP &&
          !!u &&
          c > 0 &&
          y &&
          b,
        R;
      return (
        i[7] !== S || i[8] !== c || i[9] !== v
          ? ((R = [S, v, c]), (i[7] = S), (i[8] = c), (i[9] = v), (i[10] = R))
          : (R = i[10]),
        R
      );
    }
    ((l.SubgroupSuggestionsBanner = m), (l.useSubgroupSuggestionsBanner = _));
  },
  226,
);
