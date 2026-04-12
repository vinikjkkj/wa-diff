__d(
  "WAWebQuotedMsgAdminGroupName.react",
  [
    "fbt",
    "WAWebChatCollection",
    "WAWebCmd",
    "WAWebEmojiText.react",
    "WAWebFindChatAction",
    "WAWebGroupMetadataCollection",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useImperativeHandle,
      p = d.useState,
      _ = {
        description: {
          color: "xhslqc4",
          paddingTop: "x123j3cw",
          fontSize: "x1f6kntn",
          fontWeight: "xo1l8bm",
          lineHeight: "xyesn5m",
          $$css: !0,
        },
      };
    function f(t) {
      var n,
        a = t.ref,
        i = babelHelpers.objectWithoutPropertiesLoose(t, e),
        l = i.isComposePreview,
        u = l === void 0 ? !1 : l,
        d = i.quotedGroupJid,
        f = i.quotedGroupSubject,
        g = i.quotedParentGroupJid,
        h =
          (n = r("WAWebGroupMetadataCollection").get(d)) == null
            ? void 0
            : n.participants,
        y = g != null,
        C = p(!1),
        b = C[0],
        v = C[1],
        S = function (t) {
          v(!0);
        },
        R = function (t) {
          v(!0);
        },
        L = function (t) {
          v(!1);
        },
        E = function () {
          var e = o("WAWebChatCollection").ChatCollection.get(d);
          return e == null ? void 0 : e.formattedTitle;
        },
        k = function () {
          var e = y && (h == null || !h.iAmMember());
          e ||
            o("WAWebFindChatAction")
              .findOrCreateLatestChat(d, "quotedMsgAdminGroupName")
              .then(function (e) {
                var t = e.chat;
                return o("WAWebCmd").Cmd.openChatBottom({ chat: t });
              });
        },
        I = function () {
          return !b && !u;
        };
      m(a, function () {
        return { hoverable: I };
      });
      var T = f != null ? f : E();
      if (T == null) return null;
      var D = {
          0: "x1n2onr6 x78zum5 x6ikm8r x10wlt62 x16p640f xp43t2z x5j5mwf xptal55 xjodkme",
          2: "x1ypdohk x1n2onr6 x78zum5 x6ikm8r x10wlt62 x16p640f xp43t2z x5j5mwf xptal55 xjodkme",
          1: "x1n2onr6 x78zum5 x6ikm8r x10wlt62 xjbqb8w x1bczwif x17un8ov x1e7945m x11o6v7j",
          3: "x1ypdohk x1n2onr6 x78zum5 x6ikm8r x10wlt62 xjbqb8w x1bczwif x17un8ov x1e7945m x11o6v7j",
        }[(!!b << 1) | (!!u << 0)],
        x = y
          ? s._(/*BTDS*/ "{subgroup-name}", [s._param("subgroup-name", T)])
          : null,
        $ = y
          ? c.jsx(o("WAWebEmojiText.react").EmojiText, {
              xstyle: _.description,
              text: s._(/*BTDS*/ "Request to join"),
            })
          : null;
      return c.jsx("div", {
        onMouseOver: S,
        onMouseEnter: R,
        onMouseLeave: L,
        className: D,
        children: c.jsxs(
          "div",
          babelHelpers.extends(
            {},
            {
              0: { className: "x78zum5 x6ikm8r x10wlt62 xlyipyv" },
              1: {
                className:
                  "x78zum5 x6ikm8r x10wlt62 xlyipyv xh8yej3 xcr9lap x1f6kntn x1n6pog2",
              },
            }[!!u << 0],
            {
              role: u ? "none" : "button",
              onClick: k,
              children: [
                c.jsx("span", { className: "x1okw0bk x51ohtg x1w6zdaa" }),
                c.jsxs(
                  "div",
                  babelHelpers.extends(
                    {},
                    {
                      0: {
                        className:
                          "x9f619 x78zum5 x1iyjqo2 x6s0dn4 x123j3cw xpdmqnj x1ykpatu xmzvs34 x6ikm8r x10wlt62",
                      },
                      2: {
                        className:
                          "x9f619 x78zum5 x1iyjqo2 x6s0dn4 x6ikm8r x10wlt62 x1y1aw1k xpdmqnj xdvlbce x1iwz3mf",
                      },
                      1: {
                        className:
                          "x9f619 x78zum5 x1iyjqo2 x123j3cw xpdmqnj x1ykpatu xmzvs34 x6ikm8r x10wlt62 xdt5ytf x7a106z x1yc453h",
                      },
                      3: {
                        className:
                          "x9f619 x78zum5 x1iyjqo2 x6ikm8r x10wlt62 x1y1aw1k xpdmqnj xdvlbce x1iwz3mf xdt5ytf x7a106z x1yc453h",
                      },
                    }[(!!u << 1) | (!!y << 0)],
                    {
                      children: [
                        c.jsx(
                          o("WAWebEmojiText.react").EmojiText,
                          {
                            className: "quoted-mention",
                            text:
                              x != null
                                ? x
                                : s._(/*BTDS*/ "Group \u2022 {groupName}", [
                                    s._param("groupName", T),
                                  ]),
                            direction: "auto",
                          },
                          "status",
                        ),
                        $,
                      ],
                    },
                  ),
                ),
              ],
            },
          ),
        ),
      });
    }
    f.displayName = f.name + " [from " + i.id + "]";
    var g = f;
    l.QuotedMsgAdminGroupName = g;
  },
  226,
);
