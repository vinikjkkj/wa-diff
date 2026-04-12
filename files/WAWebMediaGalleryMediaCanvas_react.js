__d(
  "WAWebMediaGalleryMediaCanvas.react",
  [
    "WAWebCmd",
    "WAWebMediaData",
    "WAWebMediaMissingModal.react",
    "WAWebMediaThumb.react",
    "WAWebMediaTypes",
    "WAWebModalManager",
    "WAWebStateUtils",
    "react",
    "useMergeRefs",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["refForMedia"],
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useRef,
      m = c.useState;
    function p(t) {
      var n = t.refForMedia,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.highlightText,
        l = a.hoverEvent,
        s = a.isRefreshed,
        c = s === void 0 ? !1 : s,
        p = a.msg,
        _ = a.onMessageSelect,
        f = a.selectable,
        g = a.selectedMessages,
        h = a.shouldForceHover,
        y = a.shouldShowSize,
        C = y === void 0 ? !1 : y,
        b = a.theme,
        v = m(function () {
          return !!(g && g.isSelected(p));
        }),
        S = v[0],
        R = v[1],
        L = d(null),
        E = r("useMergeRefs")(L, n),
        k = function (t) {
          g && S !== t && R(t);
        };
      o("useWAWebListener").useListener(g, p.id.toString(), k);
      var I = p.mediaData,
        T = function (t) {
          t.nativeEvent.dataTransfer.setData(
            "text/uri-list",
            p.mediaData.renderableUrl,
          );
        },
        D =
          I.type === r("WAWebMediaData").TYPE.IMAGE && I.renderableUrl
            ? T
            : null,
        x = function (t) {
          if (f && _) {
            _(p, !S, t);
            return;
          }
          if (
            I.mediaStage === o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING
          ) {
            o("WAWebModalManager").ModalManager.open(
              u.jsx(r("WAWebMediaMissingModal.react"), { msg: p }),
            );
            return;
          }
          t && t.stopPropagation();
          var e,
            n = p.id;
          if (I.isGif || I.type === r("WAWebMediaData").TYPE.IMAGE) {
            var a = L.current;
            e = function (t) {
              return n.equals(t) && a ? a : null;
            };
          }
          o("WAWebCmd").Cmd.mediaViewerModal({
            msg: o("WAWebStateUtils").unproxy(p),
            getZoomNode: e,
            shouldShowAllMedia: b === "mediaHub",
          });
        };
      return u.jsx(r("WAWebMediaThumb.react"), {
        onClick: x,
        hoverEvent: l,
        selectable: f,
        selected: S,
        onMessageSelect: _,
        onDragStart: D,
        msg: p,
        theme: b,
        imgRef: E,
        aspectRatio: a.aspectRatio,
        hideableSecondRow: a.hideableSecondRow,
        isRefreshed: c,
        shouldForceHover: h,
        shouldShowSize: C,
        highlightText: i,
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  98,
);
