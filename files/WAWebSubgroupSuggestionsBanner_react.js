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
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i,
        l = a.chat,
        u = a.onClose,
        m = a.subgroupSuggestionsCount,
        p = function () {
          var e,
            t = (e = l.groupMetadata) == null ? void 0 : e.parentGroup;
          t && (o("WAWebCmd").Cmd.openCommunityPendingGroupsDrawer(t), u());
        };
      return c.jsx(o("WAWebUimUie.react").UIE, {
        displayName: "SubgroupSuggestionsBanner",
        escapable: !0,
        children: c.jsx(r("WAWebConversationBanner.react"), {
          ref: n,
          xstyle: d.banner,
          onClick: p,
          onClose: u,
          children: c.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            children: [
              c.jsx(r("WAWebFlexItem.react"), {
                xstyle: o("WAWebUISpacing").uiPadding.end18,
                children: c.jsx(
                  o("WAWebSubgroupsNuxIcon.react").SubgroupsNuxIcon,
                  { xstyle: d.icon, height: 20 },
                ),
              }),
              c.jsx(r("WAWebFlexItem.react"), {
                children: c.jsx(o("WAWebText.react").WAWebTextMuted, {
                  as: "span",
                  children:
                    ((i = s._plural(m, "group_suggestions")),
                    s._(
                      /*BTDS*/ '_j{"*":"{=m0} {group_suggestions} group suggestions","_1":"{=m0} 1 group suggestion"}',
                      [
                        i,
                        s._implicitParam(
                          "=m0",
                          c.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
                            color: "accent",
                            weight: "semibold",
                            children: s._(/*BTDS*/ '_j{"*":"Review"}', [i]),
                          }),
                        ),
                      ],
                    )),
                }),
              }),
            ],
          }),
        }),
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      var t,
        n = r("useWAWebEventTargetValue")(
          e == null || (t = e.groupMetadata) == null
            ? void 0
            : t.subgroupSuggestions,
          ["add", "remove", "reset"],
          function () {
            var t, n;
            return (t =
              e == null || (n = e.groupMetadata) == null
                ? void 0
                : n.getSubgroupSuggestions().length) != null
              ? t
              : 0;
          },
        );
      return n;
    }
    function _(e) {
      var t,
        n,
        a,
        i = (t = e.groupMetadata) == null ? void 0 : t.getParentGroupChat(),
        l = p(i),
        s = i != null && i.id ? i.id.toString() : "",
        u = o("WAWebNux").getSubgroupSuggestionsBannerNuxKey(s),
        c = r("useWAWebEventTargetValue")(
          (n = e.groupMetadata) == null ? void 0 : n.participants,
          ["bulk_add", "bulk_remove", "reset", "change:isAdmin"],
          function () {
            var t;
            return !!(
              (t = e.groupMetadata) != null && t.participants.iAmAdmin()
            );
          },
        ),
        d = r("useWAWebNux")(u),
        m = d[0],
        _ = d[1],
        f =
          ((a = e.groupMetadata) == null ? void 0 : a.groupType) ===
            o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP &&
          !!i &&
          l > 0 &&
          c &&
          m;
      return [f, _, l];
    }
    ((l.SubgroupSuggestionsBanner = m), (l.useSubgroupSuggestionsBanner = _));
  },
  226,
);
