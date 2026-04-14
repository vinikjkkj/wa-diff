__d(
  "WAWebMediaEditorFilmstripAttachMediaThumb.react",
  [
    "cx",
    "fbt",
    "WAWebAudioFileIcon.react",
    "WAWebClassnames",
    "WAWebClickable.react",
    "WAWebDocumentFileIcon",
    "WAWebKeyboardIsKeyActivation",
    "WAWebMimeTypes",
    "WAWebMsgType",
    "WAWebStateUtils",
    "WAWebXAltIcon.react",
    "react",
    "useMergeRefs",
    "useWAWebHover",
    "useWAWebIsKeyboardUser",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    var e = ["ref"],
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useCallback,
      _ = m.useRef,
      f = m.useState,
      g = {
        closeButton: {
          position: "x10l6tqk",
          top: "xnfr1j",
          insetInlineEnd: "x1h1655f",
          left: null,
          right: null,
          zIndex: "x16uhe5s",
          color: "x1u01il4",
          opacity: "xg01cxk",
          $$css: !0,
        },
        closeButtonVisible: { opacity: "x1hc1fzr", $$css: !0 },
      };
    function h(e) {
      var t = e.previewUrl;
      return d.jsx("div", {
        className: "_ak3i",
        children: d.jsx("img", { src: t, alt: u._(/*BTDS*/ "Preview") }),
      });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e) {
      var t,
        n = e.attachMedia,
        a = o("useWAWebModelValues").useModelValues(n, [
          "mimetype",
          "preview",
          "type",
          "fullPreview",
          "fullPreviewSize",
          "documentPageCount",
          "fileExt",
        ]);
      if (a.type === o("WAWebMsgType").MSG_TYPE.IMAGE)
        return d.jsx(h, { previewUrl: a.preview });
      if (a.type === o("WAWebMsgType").MSG_TYPE.VIDEO) {
        var i = "data:image/jpeg;base64," + a.preview;
        return d.jsx(h, { previewUrl: i });
      } else if (o("WAWebMimeTypes").previewType(a.mimetype) === "pdf") {
        var l =
          a.fullPreview &&
          a.fullPreviewSize &&
          a.documentPageCount != null &&
          a.documentPageCount > 0;
        if (l) return d.jsx(h, { previewUrl: a.fullPreview });
      }
      if (a.type === o("WAWebMsgType").MSG_TYPE.AUDIO)
        return d.jsx("div", {
          className: "_ak3i",
          children: d.jsx(o("WAWebAudioFileIcon.react").AudioFileIcon, {}),
        });
      var s = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
        "_ak3i",
        "_ak3j",
        "x78zum5 xl56j7k x6s0dn4",
      );
      return d.jsx("div", {
        className: s,
        children: d.jsx(r("WAWebDocumentFileIcon"), {
          width: 26,
          mimeType: a.mimetype,
          ext: (t = a.fileExt) != null ? t : "",
        }),
      });
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C(e, t, n, r) {
      return e === o("WAWebMsgType").MSG_TYPE.VIDEO && r
        ? u._(/*BTDS*/ "GIF thumbnail, item {position} of {total}", [
            u._param("position", t),
            u._param("total", n),
          ])
        : e === o("WAWebMsgType").MSG_TYPE.VIDEO
          ? u._(/*BTDS*/ "Video thumbnail, item {position} of {total}", [
              u._param("position", t),
              u._param("total", n),
            ])
          : e === o("WAWebMsgType").MSG_TYPE.AUDIO
            ? u._(/*BTDS*/ "Audio thumbnail, item {position} of {total}", [
                u._param("position", t),
                u._param("total", n),
              ])
            : e === o("WAWebMsgType").MSG_TYPE.IMAGE
              ? u._(/*BTDS*/ "Image thumbnail, item {position} of {total}", [
                  u._param("position", t),
                  u._param("total", n),
                ])
              : u._(/*BTDS*/ "Document thumbnail, item {position} of {total}", [
                  u._param("position", t),
                  u._param("total", n),
                ]);
    }
    function b(t) {
      var n,
        a = t.ref,
        i = babelHelpers.objectWithoutPropertiesLoose(t, e),
        l = i.attachMedia,
        s = i.index,
        c = i.onClick,
        m = i.onClose,
        h = i.totalCount,
        b = r("useWAWebIsKeyboardUser")(),
        v = b.isKeyboardUser,
        S = _(null),
        R = o("useWAWebHover").useWAWebHover(S),
        L = r("useMergeRefs")(a, S),
        E = f(!1),
        k = E[0],
        I = E[1],
        T = function () {
          return I(!0);
        },
        D = p(function (e) {
          (S.current != null &&
            e.relatedTarget instanceof Node &&
            S.current.contains(e.relatedTarget)) ||
            I(!1);
        }, []),
        x = R || (v && k),
        $ = function (t) {
          c(o("WAWebStateUtils").unproxy(l), t);
        },
        P = function (t) {
          t.target !== t.currentTarget &&
            r("WAWebKeyboardIsKeyActivation")(t) &&
            t.stopPropagation();
        },
        N = function (t) {
          t.target === t.currentTarget &&
            r("WAWebKeyboardIsKeyActivation")(t) &&
            (t.stopPropagation(), t.preventDefault(), $(t));
        },
        M = function (t) {
          (t.stopPropagation(),
            t.preventDefault(),
            m(o("WAWebStateUtils").unproxy(l), t));
        };
      return d.jsxs("div", {
        tabIndex: 0,
        role: "tab",
        className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          ((n = {}), (n._ak3l = i.active), (n._ak3k = !0), n),
        ),
        style: x ? { filter: "none" } : void 0,
        onClick: $,
        onKeyDown: P,
        onKeyPress: N,
        onFocus: T,
        onBlur: D,
        "aria-label": C(l.type, s, h, l.isGif),
        "aria-selected": i.active,
        "aria-posinset": s,
        "aria-setsize": h,
        ref: L,
        children: [
          d.jsx(
            "div",
            babelHelpers.extends(
              {},
              {
                0: {
                  className:
                    "x10l6tqk x13vifvy x1o0tod xtijo5x x1ey2m1c x1honnu5 xg01cxk x1vq37if x47corl x1pb5qga",
                },
                1: {
                  className:
                    "x10l6tqk x13vifvy x1o0tod xtijo5x x1ey2m1c x1honnu5 x1vq37if x47corl x1pb5qga x1hc1fzr",
                },
              }[!!x << 0],
            ),
          ),
          d.jsx(o("WAWebClickable.react").Clickable, {
            onClick: M,
            ariaLabel: u._(/*BTDS*/ "Remove attachment"),
            xstyle: [g.closeButton, x && g.closeButtonVisible],
            children: d.jsx(o("WAWebXAltIcon.react").XAltIcon, {}),
          }),
          d.jsx("div", {
            className: "x6ikm8r x10wlt62 xm0mufa",
            children: d.jsx(y, { attachMedia: l }),
          }),
        ],
      });
    }
    ((b.displayName = b.name + " [from " + i.id + "]"), (l.default = b));
  },
  226,
);
