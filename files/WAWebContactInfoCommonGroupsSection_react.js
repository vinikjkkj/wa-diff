__d(
  "WAWebContactInfoCommonGroupsSection.react",
  [
    "fbt",
    "WALogger",
    "WAWebChat.react",
    "WAWebChatCommunityUtils",
    "WAWebChatInfoDrawerSection.react",
    "WAWebChatInfoExpandButton.react",
    "WAWebCmd",
    "WAWebCommunityGatingUtils",
    "WAWebComposeBoxActions",
    "WAWebFindCommonGroupsContactAction",
    "WAWebFlatList.react",
    "WAWebFrontendContactGetters",
    "WAWebUISpacing",
    "err",
    "react",
    "useWAWebContactValues",
    "useWAWebEventTargetValue",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useEffect,
      p = d.useState,
      _ = {
        titlePadding: {
          paddingInlineStart: "x1phvje8",
          paddingInlineEnd: "xcldk2z",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
      };
    function f(t) {
      var n = t.contact,
        a = t.flatListController,
        i = t.onClose,
        l = o("useWAWebContactValues").useContactValues(n.id, [
          o("WAWebFrontendContactGetters").getCommonGroups,
        ]),
        u = l[0],
        d = p(!0),
        f = d[0],
        g = d[1];
      m(function () {
        o("WAWebFindCommonGroupsContactAction")
          .findCommonGroups(n)
          .catch(function (t) {
            throw (
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "get from participants table failed",
                    ])),
                )
                .verbose()
                .sendLogs(
                  "get from participants table failed when finding common groups: " +
                    t,
                ),
              r("err")("get from participants table failed")
            );
          });
      }, []);
      var h = r("useWAWebEventTargetValue")(
          u,
          ["add", "remove"],
          function () {
            if (!u) return [];
            var e = u;
            return (
              e.length >
                o("WAWebChatInfoDrawerSection.react").INFO_DRAWER_MAX_ROWS &&
                f &&
                (e = e.slice(
                  0,
                  o("WAWebChatInfoDrawerSection.react").INFO_DRAWER_MAX_ROWS,
                )),
              e.map(function (e) {
                return {
                  itemKey: e.id.toString(),
                  chat: e,
                  height: o(
                    "WAWebCommunityGatingUtils",
                  ).shouldShowNewSubgroupIdentity(e.groupMetadata)
                    ? o("WAWebChatCommunityUtils").SUBGROUP_V2_CHAT_CELL_HEIGHT
                    : 68,
                };
              })
            );
          },
          [f],
        ),
        y = function () {
          g(!1);
        },
        C = function (t, n) {
          (o("WAWebCmd")
            .Cmd.openChatFromUnread({ chat: n })
            .then(function (e) {
              e && o("WAWebComposeBoxActions").ComposeBoxActions.focus(n);
            }),
            i());
        };
      if (!u || u.length === 0) return null;
      var b;
      if (
        u.length > o("WAWebChatInfoDrawerSection.react").INFO_DRAWER_MAX_ROWS &&
        f
      ) {
        var v =
          u.length - o("WAWebChatInfoDrawerSection.react").INFO_DRAWER_MAX_ROWS;
        b = c.jsx(r("WAWebChatInfoExpandButton.react"), {
          numMore: v,
          onClick: y,
        });
      }
      var S = s._(
        /*BTDS*/ '_j{"*":"{number} groups in common","_1":"1 group in common"}',
        [s._plural(u.length, "number")],
      );
      return c.jsxs(
        o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerListSection,
        {
          titleTestId: "section-common-groups",
          title: S,
          theme: "refresh-new",
          xstyle: [
            o("WAWebUISpacing").uiPadding.horiz0,
            o("WAWebUISpacing").uiMargin.top10,
          ],
          titleXStyle: _.titlePadding,
          children: [
            c.jsx("div", {
              className: "x1380le5",
              children: c.jsx(o("WAWebFlatList.react").FlatList, {
                flatListController: a,
                direction: "vertical",
                forceConsistentRenderCount: !1,
                data: h,
                renderItem: function (t) {
                  var e = t.chat;
                  return c.jsx(
                    o("WAWebChat.react").Chat,
                    {
                      chat: e,
                      theme: "chat-info",
                      mode: o("WAWebChat.react").Mode.INFO,
                      onClick: C,
                      showCommunityInfo: !0,
                    },
                    e.id.toString(),
                  );
                },
              }),
            }),
            b,
          ],
        },
      );
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  226,
);
