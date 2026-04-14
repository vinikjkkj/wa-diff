__d(
  "WAWebBizCtwaPreview.react",
  [
    "WAWebBizCtwaAGMUtils",
    "WAWebBizCtwaThumbnailImage.react",
    "WAWebBizGatingUtils",
    "WAWebBizOpenStatusModal",
    "WAWebClassnames",
    "WAWebCmd",
    "WAWebCtwaAGMUtils",
    "WAWebCtwaLogger",
    "WAWebEmojiText.react",
    "WAWebKeyboardConstants",
    "WAWebMsgGetters",
    "WAWebStateUtils",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useCallback,
      c = {
        thumbnail: {
          flexGrow: "x1c4vz4f",
          flexShrink: "x2lah0s",
          flexBasis: "xdl72j9",
          width: "x1useyqa",
          height: "xsdox4t",
          borderStartStartRadius: "xaejkm2",
          borderStartEndRadius: "x1uuy6ko",
          borderEndEndRadius: "x1gfim23",
          borderEndStartRadius: "xqfj769",
          objectFit: "xl1xv1r",
          $$css: !0,
        },
      };
    function d(e) {
      var t,
        n = e.context,
        a = e.msg,
        i =
          (t = n.sourceApp) != null
            ? t
            : o("WAWebBizCtwaAGMUtils").getHostnameLabel(n),
        l =
          i != null
            ? s.jsx("div", {
                className:
                  "x104kibb x1c4vz4f xs83m0k xdl72j9 xw6vvto x6ikm8r x10wlt62 x14ug900 xlyipyv x1h7i4cw x1ua5tub x1s688f x6prxxf x1fc57z9 x1w2d6ul",
                "data-testid": void 0,
                children: s.jsx(o("WAWebEmojiText.react").EmojiText, {
                  text: o("WAWebBizCtwaAGMUtils").getAdSourceLabel(i),
                }),
              })
            : null,
        d = o("WAWebMsgGetters").getIsSentByMe(a),
        p =
          "x9f619 x78zum5 xdt5ytf xl56j7k xh8yej3 x6h9qgo x6ikm8r x10wlt62 x17fgdl5",
        _ = s.jsx("div", {
          className:
            "x1c4vz4f x7f0hsc xdl72j9 x6ikm8r x10wlt62 x1nxh6w3 xhslqc4 xd4r4e8",
          title: n.description,
          children: s.jsx(o("WAWebEmojiText.react").EmojiText, {
            text: o("WAWebBizCtwaAGMUtils").getCtwaDetailsLabel(),
          }),
        }),
        f = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          {
            0: "xvijh9v x1mpyi22 x1ty9z65 xm2jcoa x6ikm8r x10wlt62 x1wl59ut x1fc57z9 xaejkm2 x1uuy6ko x1gfim23 xqfj769 x1ypdohk x6egj2d",
            1: "xvijh9v x1mpyi22 x1ty9z65 xm2jcoa x6ikm8r x10wlt62 x1wl59ut x1fc57z9 xaejkm2 x1uuy6ko x1gfim23 xqfj769 x1ypdohk x4wrhlh",
          }[!!d << 0],
        ),
        g = u(
          function () {
            n.sourceApp === o("WAWebCtwaAGMUtils").AGM_SOURCE_APP.WHATSAPP &&
            o("WAWebBizGatingUtils").getWamoAgmEnabled()
              ? r("WAWebBizOpenStatusModal")()
              : m(n, a);
          },
          [n, a],
        );
      return s.jsx("div", {
        className: f,
        onClick: g,
        "data-testid": void 0,
        role: "button",
        tabIndex: 0,
        onKeyPress: function (t) {
          (t.key ===
            o("WAWebKeyboardConstants").KEYBOARD_EVENT_KEY_VALUE.ENTER ||
            t.key ===
              o("WAWebKeyboardConstants").KEYBOARD_EVENT_KEY_VALUE.SPACE) &&
            g();
        },
        children: s.jsxs("div", {
          className:
            "x78zum5 x1qjc9v5 x1nhvcw1 xh8yej3 x6ikm8r x10wlt62 x889kno x2vl965 x1a8lsjc xe2zdcy x1q0g3np xlrrn2g",
          children: [
            s.jsx(r("WAWebBizCtwaThumbnailImage.react"), {
              context: n,
              businessWid: a.from,
              fromMe: o("WAWebMsgGetters").getIsSentByMe(a),
              xstyle: c.thumbnail,
              isThumbnail: !0,
            }),
            n.sourceUrl != null
              ? s.jsxs("div", { className: p, children: [l, _] })
              : null,
          ],
        }),
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e, t) {
      var n = o("WAWebCtwaAGMUtils").extractAGMPayload(e),
        r = o("WAWebMsgGetters").getIsSentByMe(t),
        a = function () {
          o("WAWebCtwaLogger").logAGMOperation({
            operationType:
              o("WAWebCtwaLogger").AGM_OPERATION_TYPE.agm_bottom_sheet_closed,
            fromBusiness: r,
            agmPayload: n,
            businessWid: t.from,
            adId: e.sourceId,
          });
        },
        i = function () {
          o("WAWebCtwaLogger").logAGMOperation({
            operationType:
              o("WAWebCtwaLogger").AGM_OPERATION_TYPE.agm_bottom_sheet_shown,
            fromBusiness: r,
            agmPayload: n,
            businessWid: t.from,
            adId: e.sourceId,
          });
        };
      (o("WAWebCtwaLogger").logAGMOperation({
        operationType:
          o("WAWebCtwaLogger").AGM_OPERATION_TYPE.agm_view_details_clicked,
        fromBusiness: r,
        agmPayload: n,
        businessWid: t.from,
        adId: e.sourceId,
      }),
        o("WAWebCmd").Cmd.ctwaAdPreviewDrawer(
          o("WAWebStateUtils").unproxy(t),
          a,
          i,
        ));
    }
    l.default = d;
  },
  98,
);
