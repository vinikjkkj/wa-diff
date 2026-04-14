__d(
  "WAWebQuotedMsgQuotedMedia.react",
  [
    "cx",
    "WAWebClassnames",
    "WAWebMessagePluginQuotedMsgThumbnailIcon",
    "WAWebMsgCollection",
    "WAWebMsgType",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["msg", "rootMsg"],
      u,
      c = u || (u = o("react"));
    function d(e) {
      var t = e.source;
      return c.jsx("div", {
        "data-testid": void 0,
        style: { backgroundImage: "url(data:image/jpeg;base64," + t + ")" },
        className: "xh8yej3 x5yr21d x1xsqp64 x18d0r48",
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(t) {
      var n = t.msg,
        r = t.rootMsg,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = t.msg;
      if (
        r != null &&
        r.selectedCarouselCardIndex != null &&
        n.carouselCards != null
      ) {
        var l = n.carouselCards.at(r.selectedCarouselCardIndex);
        l != null && (i = l.unsafe());
      }
      return o("WAWebMsgCollection").MsgCollection.get(i.id) == null
        ? null
        : c.jsx(p, babelHelpers.extends({ msg: i }, a));
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      var t,
        n,
        r = e.msg,
        a = e.theme;
      if (r.isViewOnce) return null;
      var i = o(
          "WAWebMessagePluginQuotedMsgThumbnailIcon",
        ).quotedMsgThumbailIconComponent(r),
        l = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          ((t = {}),
          (t._agto = a === "composeBox"),
          (t._ar58 = a === "status"),
          (t._agtq = r.type === o("WAWebMsgType").MSG_TYPE.PAYMENT),
          (t._agtm = !0),
          (t._amii = r.type === o("WAWebMsgType").MSG_TYPE.PTV),
          t),
        );
      return i
        ? c.jsx("div", {
            className: l,
            children: c.jsx("div", {
              className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
                ((n = {}), (n._agtn = !0), n),
              ),
              children: c.jsx(i, { msg: r, theme: a }),
            }),
          })
        : null;
    }
    ((p.displayName = p.name + " [from " + i.id + "]"),
      (l.Base64BackgroundImage = d),
      (l.QuotedMediaUnsafe = m));
  },
  98,
);
