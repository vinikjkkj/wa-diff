__d(
  "WAWebGroupInfoCommunitySection.react",
  [
    "fbt",
    "WALogger",
    "WAWebCellV2.react",
    "WAWebChatCommunityUtils",
    "WAWebDetailImage.react",
    "WAWebDrawerSection.react",
    "WAWebEmojiText.react",
    "WAWebL10N",
    "WAWebQuerySubGroupAction",
    "WAWebText.react",
    "WAWebUISpacing",
    "react",
    "useWAWebCommunitySubgroups",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u.useEffect;
    function m(t) {
      var n = t.onClick,
        a = t.parentGroupChat,
        i = t.parentGroupMetadata,
        l = r("useWAWebCommunitySubgroups")(i),
        u = l.subgroupCount,
        m = o("useWAWebModelValues").useModelValues(a.contact, ["name"]),
        p = m.name,
        _ = o("WAWebChatCommunityUtils").isIntegrityDeactivatedCommunity(a);
      d(function () {
        o("WAWebQuerySubGroupAction")
          .queryAndUpdateSubgroupsMetadata(i.id, i.joinedSubgroups)
          .catch(function () {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[community][group-info] Failed to query subgroups metadata",
                  ])),
              )
              .sendLogs("failed-query-subgroups-metadata");
          });
      }, []);
      var f = s._(/*BTDS*/ "Community"),
        g = c.jsx(o("WAWebDetailImage.react").DetailImage, {
          id: i.id,
          shape: o("WAWebDetailImage.react").DetailImageShape.Squircle,
          size: 48,
        }),
        h = c.jsx(o("WAWebEmojiText.react").EmojiText, {
          text: p,
          ellipsify: !0,
        });
      h = c.jsx(o("WAWebText.react").WAWebTextTitleRefreshed, { children: h });
      var y = c.jsxs(c.Fragment, {
          children: [
            f,
            _
              ? null
              : c.jsxs(c.Fragment, {
                  children: [
                    r("WAWebL10N").isRTL() ? " -\xA0" : " \xB7\xA0",
                    s._(/*BTDS*/ '_j{"*":"{count} Groups","_1":"1 Group"}', [
                      s._plural(u, "count"),
                    ]),
                  ],
                }),
          ],
        }),
        C = c.jsx(o("WAWebText.react").WAWebTextMutedRefreshed, {
          children: y,
        }),
        b = {
          theme: "refresh-new",
          xstyle: [
            o("WAWebUISpacing").uiPadding.vert0,
            o("WAWebUISpacing").uiPadding.horiz0,
          ],
        },
        v = "group-info-community-section";
      return c.jsx(
        r("WAWebDrawerSection.react"),
        babelHelpers.extends({}, b, {
          children: c.jsx(r("WAWebCellV2.react"), {
            testid: void 0,
            size: "medium",
            isRefresh: !0,
            detailLeft: g,
            primary: h,
            secondary: C,
            onClick: n,
          }),
        }),
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
