__d(
  "WAWebThumbList.react",
  [
    "fbt",
    "WALogger",
    "WAMapsShallowEqual",
    "WAWebAllMediaCollection",
    "WAWebFocusTracer",
    "WAWebMediaIncrementalZoom",
    "WAWebMediaThumb.react",
    "WAWebMediaViewerFlow.react",
    "WAWebMsgGetters",
    "WAWebSpinner.react",
    "react",
    "useWAWebPrevious",
    "useWAWebThrottledCallback",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useCallback,
      p = d.useContext,
      _ = d.useEffect,
      f = d.useImperativeHandle,
      g = d.useLayoutEffect,
      h = d.useRef,
      y = d.useState,
      C = c.memo(r("WAWebMediaThumb.react"));
    function b(t) {
      var n = t.activeMsg,
        a = t.highlightedMsgIds,
        i = t.mediaMsgs,
        l = t.msgIdToPreferPreview,
        s = t.onSelectThumb,
        u = t.onSetActiveThumb,
        d = t.ref,
        p = h({}),
        _ = function () {
          var e = n.id.toString(),
            t = p.current[e];
          t && r("WAWebFocusTracer").focus(t);
        };
      f(d, function () {
        return { focusOnActive: _ };
      });
      var g = a != null && a.size > 0 && a.has(n.id.toString()),
        y = [],
        C = m(function (e, t) {
          p.current[t] = e;
        }, []),
        b =
          i instanceof o("WAWebAllMediaCollection").WAWebAllMediaCollection
            ? i.getMsgsAround(n, 50)
            : i;
      b.forEach(function (t) {
        if (t.mediaData == null) {
          var r = n;
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "MediaViewerFlow: attempted to render a msg without mediaData: ",
                  "",
                ])),
              JSON.stringify({
                type: t.type,
                isMedia: o("WAWebMsgGetters").getIsMedia(t),
                startMsgType: r.type,
                startMsgIsMedia: o("WAWebMsgGetters").getIsMedia(r),
              }),
            )
            .verbose();
          return;
        }
        var i =
          g && a && !a.has(t.id.toString())
            ? "viewerFlowTransparent"
            : "viewerFlow";
        y.push(
          c.jsx(
            v,
            {
              theme: i,
              active: t === n,
              msg: t,
              onClick: s,
              setThumbRef: C,
              onSetActiveThumb: u,
              preferPreview: !!l.get(t.id.toString()),
              showTooltip: o("WAWebMsgGetters").getIsGroupMsg(t),
              tabIndex: t === n ? 0 : -1,
            },
            "media-" + t.id.id,
          ),
        );
      });
      var S =
        "x1n2onr6 x9f619 x78zum5 x3psx0u x6s0dn4 xl56j7k x9whnou xa06r8k xr6zewm xuzvuw4 xqf2s3x";
      return (
        y.push(
          c.jsx(
            "div",
            {
              className: S,
              children:
                i.queryMediaAfter != null
                  ? c.jsx(o("WAWebSpinner.react").Spinner, {
                      stroke: 6,
                      size: 24,
                    })
                  : null,
            },
            "spinner-right",
          ),
        ),
        y.unshift(
          c.jsx(
            "div",
            {
              className: S,
              children:
                i.queryMediaBefore != null
                  ? c.jsx(o("WAWebSpinner.react").Spinner, {
                      stroke: 6,
                      size: 24,
                    })
                  : null,
            },
            "spinner-left",
          ),
        ),
        y.push(c.jsx("div", { className: "x1mkiy5m" }, "padding-right")),
        y.unshift(c.jsx("div", { className: "x1mkiy5m" }, "padding-left")),
        c.jsx(c.Fragment, { children: y })
      );
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v(e) {
      var t = e.active,
        n = e.msg,
        r = e.onClick,
        o = e.onSetActiveThumb,
        a = e.preferPreview,
        i = e.setThumbRef,
        l = e.showTooltip,
        s = e.tabIndex,
        u = e.theme,
        d = m(
          function () {
            r(n);
          },
          [n, r],
        ),
        p = m(
          function (e) {
            (i(e, n.id.toString()), t === !0 && o(e));
          },
          [t, n.id, o, i],
        );
      return c.jsx(C, {
        theme: u,
        active: t,
        msg: n,
        containerRef: p,
        onClick: d,
        preferPreview: a,
        showTooltip: l,
        tabIndex: s,
      });
    }
    v.displayName = v.name + " [from " + i.id + "]";
    var S = b;
    function R(e) {
      var t = p(o("WAWebMediaViewerFlow.react").MediaViewerFlowZoomContext),
        n = e.activeMsg,
        a = e.mediaMsgs,
        i = e.moveDownAnimation,
        l = e.moveUpAnimation,
        u = e.onScroll;
      E({ moveDownAnimation: i, moveUpAnimation: l });
      var d = h({}),
        m = h(null),
        f = h(null),
        g = r("useWAWebPrevious")(n.id),
        C = function () {
          var e;
          (e = m.current) == null || e.focusOnActive();
        };
      _(
        function () {
          var e;
          (e = f.current) != null &&
            e.contains(document.activeElement) &&
            !n.id.equals(g) &&
            C();
        },
        [n, g],
      );
      var b = function (t) {
          var e = d.current[t];
          if (!e) return !1;
          var n = e.getBoundingClientRect(),
            r = (n.left + n.right) / 2,
            o = r > -1 * window.innerWidth && r < 2 * window.innerWidth;
          return !o;
        },
        v = function () {
          var e = new Map();
          return (
            a.forEach(function (t) {
              var n = t.id.toString();
              e.set(n, b(n));
            }),
            e
          );
        },
        R = y(v),
        L = R[0],
        k = R[1],
        I = r("useWAWebThrottledCallback")(function () {
          var e = v();
          r("WAMapsShallowEqual")(L, e) || k(e);
        }, 100),
        T = function (t) {
          (I(), u(t));
        },
        D = t;
      return c.jsx(
        "div",
        babelHelpers.extends(
          {},
          {
            0: {
              className:
                "xsm26vf x10l6tqk x1ey2m1c xoxg7ud x9f619 x78zum5 xdt5ytf x6s0dn4 x1nhvcw1 xh8yej3 xpyat2d x6ikm8r x10wlt62 x13fuv20 x178xt8z xx42vgk xg01cxk xqu7myx",
            },
            1: {
              className:
                "xsm26vf x10l6tqk x1ey2m1c xoxg7ud x9f619 x78zum5 xdt5ytf x6s0dn4 x1nhvcw1 xh8yej3 xpyat2d x6ikm8r x10wlt62 x13fuv20 x178xt8z xx42vgk xqu7myx x1yn0zye xvdu4fi",
            },
          }[!!D << 0],
          {
            ref: e.setRefThumbsContainer,
            children: c.jsx("div", {
              ref: f,
              className: "xh8yej3",
              dir: "ltr",
              children: c.jsx("div", {
                role: "list",
                "aria-label": s._(/*BTDS*/ "Media list"),
                onScroll: T,
                className: "x78zum5 xh8yej3 x14aock7 x16ovd2e x12xbjc7",
                ref: e.setRefThumbs,
                children: c.jsx(S, {
                  ref: m,
                  mediaMsgs: a,
                  highlightedMsgIds: e.highlightedMsgIds,
                  activeMsg: e.activeMsg,
                  onSetActiveThumb: e.onSetActiveThumb,
                  onSelectThumb: e.onSelectThumb,
                  msgIdToPreferPreview: L,
                }),
              }),
            }),
          },
        ),
      );
    }
    R.displayName = R.name + " [from " + i.id + "]";
    var L = 200;
    function E(e) {
      var t = e.moveDownAnimation,
        n = e.moveUpAnimation,
        a = p(o("WAWebMediaIncrementalZoom").MediaIncrementalZoomCtx),
        i = a.hasOverflownThumbnailSection,
        l = r("useWAWebPrevious")(i),
        s = h(!1),
        u = h(!1),
        c = a.isEnabled,
        d = a.msgId,
        f = m(
          function () {
            (n == null || n(), (s.current = !1));
          },
          [n],
        ),
        y = m(
          function () {
            (t == null || t(), (s.current = !0));
          },
          [t],
        ),
        C = function () {
          return (
            (u.current = !1),
            window.setTimeout(function () {
              u.current = !0;
            }, L)
          );
        };
      (_(function () {
        var e = C();
        return function () {
          window.clearTimeout(e);
        };
      }, []),
        g(
          function () {
            u.current = !1;
            var e = C();
            return (
              s.current && f(),
              function () {
                window.clearTimeout(e);
              }
            );
          },
          [d],
        ),
        _(
          function () {
            !c || !u.current || i === l || ((s.current = i), i ? y() : f());
          },
          [a.msgId, i, y, c, t, n, l, f],
        ));
    }
    l.default = R;
  },
  226,
);
