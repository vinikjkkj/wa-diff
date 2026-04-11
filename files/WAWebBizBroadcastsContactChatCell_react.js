__d(
  "WAWebBizBroadcastsContactChatCell.react",
  [
    "WAWebBizBroadcastsTemplateParsingUtils",
    "WAWebContactImage.react",
    "WAWebDefaultContactRefreshedIcon.react",
    "WAWebDetailImage.react",
    "WAWebFlex.react",
    "WAWebFrontendContactGetters",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        circleIconRefreshed: {
          backgroundColor: "x1od0jb8",
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          $$css: !0,
        },
        profilePictureOutlineRefreshed: {
          outline: "x4u6w88",
          outlineOffset: "x1g40iwv",
          $$css: !0,
        },
        svgSize: { height: "x5yr21d", width: "xh8yej3", $$css: !0 },
      };
    function c(e) {
      var t = o("react-compiler-runtime").c(14),
        n = e.contact,
        a = e.index,
        i = e.rowData,
        l;
      if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
        var c;
        ((l =
          (c = o("WAWebDetailImage.react").getSize(
            o("WAWebDetailImage.react").DetailImageSize.ExtraSmall,
          )) != null
            ? c
            : 40),
          (t[0] = l));
      } else l = t[0];
      var d = l,
        m;
      e: {
        if (n != null) {
          var p;
          (t[1] !== n
            ? ((p = o("WAWebFrontendContactGetters").getDisplayName(n)),
              (t[1] = n),
              (t[2] = p))
            : (p = t[2]),
            (m = p));
          break e;
        }
        if (i != null) {
          var _;
          (t[3] !== i
            ? ((_ = o("WAWebBizBroadcastsTemplateParsingUtils").extractName(i)),
              (t[3] = i),
              (t[4] = _))
            : (_ = t[4]),
            (m = _));
          break e;
        }
        m = null;
      }
      var f = m,
        g;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = { className: "x2lah0s" }), (t[5] = g))
        : (g = t[5]);
      var h;
      t[6] !== n
        ? ((h = s.jsx(
            "div",
            babelHelpers.extends({}, g, {
              children:
                n != null
                  ? s.jsx(r("WAWebContactImage.react"), { contact: n, size: d })
                  : s.jsx("div", {
                      style: { height: d, width: d },
                      children: s.jsx(
                        o("WAWebDefaultContactRefreshedIcon.react")
                          .DefaultContactRefreshedIcon,
                        {
                          iconXstyle: [
                            u.svgSize,
                            u.circleIconRefreshed,
                            u.profilePictureOutlineRefreshed,
                          ],
                          "aria-hidden": !0,
                        },
                      ),
                    }),
            }),
          )),
          (t[6] = n),
          (t[7] = h))
        : (h = t[7]);
      var y = "biz-broadcasts-contact-chat-cell-" + a,
        C;
      t[8] !== f || t[9] !== y
        ? ((C = s.jsx(r("WDSText.react"), {
            colorName: "contentDefault",
            type: "Body1",
            maxLines: 1,
            testid: void 0,
            children: f,
          })),
          (t[8] = f),
          (t[9] = y),
          (t[10] = C))
        : (C = t[10]);
      var b;
      return (
        t[11] !== h || t[12] !== C
          ? ((b = s.jsxs(o("WAWebFlex.react").FlexRow, {
              marginTop: 8,
              marginBottom: 8,
              align: "center",
              gap: 12,
              children: [h, C],
            })),
            (t[11] = h),
            (t[12] = C),
            (t[13] = b))
          : (b = t[13]),
        b
      );
    }
    l.default = c;
  },
  98,
);
