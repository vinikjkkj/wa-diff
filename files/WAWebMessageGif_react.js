__d(
  "WAWebMessageGif.react",
  [
    "cx",
    "fbt",
    "WAWebABProps",
    "WAWebBizCtwaContext.react",
    "WAWebChatPreferenceCollection",
    "WAWebClassnames",
    "WAWebClickable.react",
    "WAWebCmd",
    "WAWebDisplayType",
    "WAWebEnvironment",
    "WAWebFrontendMsgGetters",
    "WAWebGiphyIcon.react",
    "WAWebMediaMissingModal.react",
    "WAWebMediaOpaqueData",
    "WAWebMediaTypes",
    "WAWebMessageAuthor.react",
    "WAWebMessageBubbleHiddenText.react",
    "WAWebMessageCaption.react",
    "WAWebMessageForwardedIndicator.react",
    "WAWebMessageGifState.react",
    "WAWebMessageMeta.react",
    "WAWebMessagePaidPartnershipDisclaimerText.react",
    "WAWebMessageThumbShadeBottom.react",
    "WAWebModalManager",
    "WAWebMsgGetters",
    "WAWebMsgSelectors",
    "WAWebProtobufsE2E.pb",
    "WAWebStateUtils",
    "WAWebStopEvent",
    "WAWebTenorIcon.react",
    "WAWebVideo.react",
    "isStringNullOrEmpty",
    "react",
    "useWAWebIntersection",
    "useWAWebModelValues",
    "useWAWebMsgDownloadMedia",
    "useWAWebMsgValues",
    "useWAWebSendViewCount",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    var e = ["ref"],
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useEffect,
      _ = m.useImperativeHandle,
      f = m.useRef,
      g = m.useState,
      h = 330,
      y = 474,
      C = 3,
      b = 4,
      v = 1,
      S = 3,
      R = 5;
    function L(t) {
      var n,
        a,
        i,
        l,
        s,
        c = t.ref,
        m = babelHelpers.objectWithoutPropertiesLoose(t, e),
        L = m.isMsgVisible,
        E = m.msg,
        k = o("useWAWebMsgValues").useMsgValues(m.msg.id, [
          (s = o("WAWebMsgGetters")).getId,
          s.getAck,
          s.getCaption,
          s.getIsFailed,
          s.getIsPSA,
          s.getIsSentByMe,
          s.getIsGroupMsg,
          s.getGifAttribution,
          o("WAWebFrontendMsgGetters").getSenderObj,
        ]),
        I = k[0],
        T = k[1],
        D = k[2],
        x = k[3],
        $ = k[4],
        P = k[5],
        N = k[6],
        M = k[7],
        w = k[8],
        A = o("useWAWebModelValues").useModelValues(m.mediaData, [
          "aspectRatio",
          "preview",
          "duration",
          "type",
          "mediaStage",
          "renderableUrl",
          "fullWidth",
          "fullHeight",
          "size",
        ]),
        F = A,
        O = f(null),
        B = f(!1),
        W = f(!1),
        q = f(0),
        U = f(null),
        V = f(),
        H = g(!1),
        G = H[0],
        z = H[1],
        j = r("useWAWebUnmountSignal")(),
        K = o("useWAWebModelValues").useModelValues(
          r("WAWebChatPreferenceCollection").getDefault(),
          ["autoplayAnimatedImages"],
        );
      o("useWAWebMsgDownloadMedia").useMsgDownloadMedia(E);
      var Q =
          o("WAWebDisplayType").isWideDisplay(m.displayType) ||
          m.displayType ===
            o("WAWebDisplayType").DISPLAY_TYPE.CHANNEL_ALERTS_MSGS
            ? y
            : h,
        X = Q / b,
        Y = function () {
          var e;
          (z(!1), (e = O.current) == null || e.pauseAndReset());
        },
        J = function () {
          ((q.current = 0), Y());
        },
        Z = function () {
          var e = O.current;
          if (e) {
            if (q.current <= 0) {
              J();
              return;
            }
            ((q.current -= 1), G || z(!0), e.play());
          }
        },
        ee = function () {
          o("WAWebModalManager").ModalManager.open(
            d.jsx(r("WAWebMediaMissingModal.react"), { msg: E.unsafe() }),
          );
        },
        te = function (t) {
          if (!L) return null;
          var e = L(t);
          return e == null || typeof e == "boolean"
            ? null
            : e.getImgNode && e.getImgNode();
        },
        ne = function (t) {
          var e,
            n,
            r,
            a = O.current;
          if (
            A.mediaStage === o("WAWebMediaTypes").MediaDataStage.RESOLVED &&
            a
          ) {
            if ((t && t.stopPropagation(), !B.current)) {
              W.current = !0;
              return;
            }
            if (((W.current = !1), U.current == null || U.current === 0)) {
              var i = a.getDuration();
              i != null && !isNaN(i)
                ? (U.current = i)
                : A.duration &&
                  A.duration !== "0" &&
                  (U.current = parseInt(A.duration, 10));
            }
            var l =
                (e =
                  o("WAWebABProps").getABPropConfigValue(
                    "gif_min_play_loops",
                  )) != null
                  ? e
                  : v,
              s =
                (n =
                  o("WAWebABProps").getABPropConfigValue(
                    "gif_max_play_loops",
                  )) != null
                  ? n
                  : S,
              u =
                (r = o("WAWebABProps").getABPropConfigValue(
                  "gif_max_play_duration",
                )) != null
                  ? r
                  : R;
            if (U.current != null && U.current !== 0) {
              var c = Math.ceil(u / U.current);
              q.current = Math.max(Math.min(c, s), l);
            } else q.current = l;
            Z();
          }
        },
        re = function () {
          E.forceDownloadMediaEvenIfExpensive();
        },
        oe = function () {
          E.cancelDownload();
        },
        ae = function () {
          E.cancelUpload();
        },
        ie = function () {
          E.resumeUpload();
        },
        le = function () {
          E.resumeRemoteUpload();
        },
        se = function () {
          return !G && q.current !== 1 / 0;
        },
        ue = function (t) {
          (t && t.stopPropagation(),
            o("WAWebCmd").Cmd.mediaViewerModal({
              msg: o("WAWebStateUtils").unproxy(E.unsafe()),
              getZoomNode: te,
            }));
        },
        ce;
      m.displayType !== o("WAWebDisplayType").DISPLAY_TYPE.EDITING &&
        m.displayType !==
          o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER_PREVIEW &&
        (ce = function (t) {
          switch (F.mediaStage) {
            case o("WAWebMediaTypes").MediaDataStage.RESOLVED:
              se() ? ne(t) : ue(t);
              break;
            case o("WAWebMediaTypes").MediaDataStage.INIT:
              ue(t);
              break;
            case o("WAWebMediaTypes").MediaDataStage.FETCHING:
              oe();
              break;
            case o("WAWebMediaTypes").MediaDataStage.NEED_POKE:
              re();
              break;
            case o("WAWebMediaTypes").MediaDataStage.UPLOADING:
              ae();
              break;
            case o("WAWebMediaTypes").MediaDataStage.NEED_UPLOAD:
              ie();
              break;
            case o("WAWebMediaTypes").MediaDataStage.REMOTE_NEED_UPLOAD:
              le();
              break;
            case o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING:
              ee();
              break;
            default:
          }
        });
      var de = function (t) {
          (t.stopPropagation(), t.preventDefault(), ce(t));
        },
        me = function () {
          var e = F.aspectRatio || F.fullWidth / F.fullHeight;
          if (!e)
            return {
              bubbleWidth: Q,
              bubbleHeight: "100%",
              contentWidth: Q,
              contentHeight: "100%",
            };
          var t,
            n,
            r = X * 1.2;
          (e <= 1 / b
            ? ((n = Q), (t = r))
            : e < 1
              ? ((n = Q), (t = Q * e))
              : e < b
                ? ((t = Q), (n = Q / e))
                : ((t = Q), (n = X)),
            (m.displayType === o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER ||
              m.displayType ===
                o("WAWebDisplayType").DISPLAY_TYPE.ANNOUNCEMENT) &&
              ((t = Q), (n = X)));
          var a = (F.renderableUrl && F.fullWidth) || t,
            i = (F.renderableUrl && F.fullHeight) || n;
          return (
            a / i > t / n
              ? ((a = (a * n) / i), (i = n))
              : ((i = (i * t) / a), (a = t)),
            i > Q && (i = Q),
            {
              bubbleWidth: t,
              bubbleHeight: n,
              contentWidth: a,
              contentHeight: i,
            }
          );
        },
        pe = function (t) {
          if (
            m.displayType ===
            o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER_PREVIEW
          )
            return {
              bubbleWidth: t,
              bubbleHeight: t,
              contentWidth: t,
              contentHeight: t,
            };
          var e = F.aspectRatio || F.fullWidth / F.fullHeight,
            n,
            r,
            a = X * 1.2;
          e >= 1
            ? t < Q
              ? ((n = t), (r = n / e), e >= b && r < X && (r = X))
              : ((n = Q), (r = n / e), r < X && (r = X))
            : ((r = Q),
              (n = r * e),
              n < a && (n = a),
              t < Q && n > t && (n = t));
          var i = n,
            l = r;
          return (
            i / l > n / r
              ? ((i = (i * r) / l), (l = r))
              : ((l = (l * n) / i), (i = n)),
            {
              bubbleWidth: n,
              bubbleHeight: r,
              contentWidth: i,
              contentHeight: l,
            }
          );
        },
        _e = function () {
          return V.current;
        },
        fe = function () {
          return q.current;
        };
      _(c, function () {
        return {
          getImgNode: _e,
          handleKeyActivation: de,
          pause: J,
          getPlayCount: fe,
        };
      });
      var ge = r("useWAWebIntersection")({ root: null, threshold: 0.99 }),
        he = ge[0],
        ye = ge[1].isIntersecting;
      (o("useWAWebSendViewCount").useSendViewCount(E.id, {
        mediaData: A,
        isIntersecting: ye,
        displayType: m.displayType,
      }),
        p(
          function () {
            self.setTimeout(function () {
              j.aborted ||
                (K.autoplayAnimatedImages === !0 &&
                  F.mediaStage ===
                    o("WAWebMediaTypes").MediaDataStage.RESOLVED &&
                  ye &&
                  ne());
            }, 100);
          },
          [F.mediaStage, ye],
        ));
      var Ce =
          F.preview instanceof r("WAWebMediaOpaqueData")
            ? F.preview.url()
            : void 0,
        be = null,
        ve = me();
      m.maxWidth != null &&
        m.maxWidth < ve.bubbleWidth &&
        (ve = pe(m.maxWidth));
      var Se = ve,
        Re = Se.bubbleWidth,
        Le = Se.contentHeight,
        Ee = Se.contentWidth;
      if (F.mediaStage === o("WAWebMediaTypes").MediaDataStage.RESOLVED) {
        var ke =
            r("WAWebEnvironment").isWindows === !0
              ? u._(/*BTDS*/ "Video playback is not supported on this device.")
              : u._(/*BTDS*/ "Your browser doesn't support video playback."),
          Ie =
            F.aspectRatio >= 1
              ? { width: "auto", height: Le }
              : { width: Ee, height: "auto" };
        be = d.jsx("div", {
          ref: V,
          className: "_ahn7",
          children: d.jsx(r("WAWebVideo.react"), {
            ref: O,
            src: F.renderableUrl,
            style: Ie,
            onEnded: Z,
            onLoadedMetadata: function () {
              ((B.current = !0),
                K.autoplayAnimatedImages === !0 && W.current && ne());
            },
            muted: !0,
            children: ke,
          }),
        });
      }
      var Te = Ce
          ? d.jsx("div", {
              className: "_ahn8",
              style: { backgroundImage: "url(" + Ce + ")" },
            })
          : null,
        De = D
          ? d.jsx("div", {
              className: "_ahn5",
              style: {
                maxWidth: o("WAWebDisplayType").DISPLAY_TYPE.CHANNEL_ALERTS_MSGS
                  ? "100%"
                  : Re,
              },
              children: d.jsx(r("WAWebMessageCaption.react"), {
                msg: E.unsafe(),
                trusted: m.trusted,
                testId: "gif-caption",
              }),
            })
          : null,
        xe = De ? null : d.jsx(r("WAWebMessageThumbShadeBottom.react"), {}),
        $e =
          o("WAWebMsgSelectors").showForwarded(E) &&
          m.displayType !==
            o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER_PREVIEW,
        Pe = o("WAWebDisplayType").isWideDisplay(m.displayType),
        Ne = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          ((n = {}),
          (n["_ahm-"] = !r("isStringNullOrEmpty")(D)),
          (n._ahn2 = m.displayAuthor),
          (n._ahn0 = $e),
          (n._ahn6 = $),
          (n._ahn9 =
            m.displayType === o("WAWebDisplayType").DISPLAY_TYPE.STARRED_MSGS ||
            m.displayType === o("WAWebDisplayType").DISPLAY_TYPE.GALLERY),
          (n._ahna =
            m.displayType === o("WAWebDisplayType").DISPLAY_TYPE.MSG_INFO),
          (n._ak_x = Pe),
          (n._ahmx = !0),
          (n._anjj =
            m.displayType ===
            o("WAWebDisplayType").DISPLAY_TYPE.CHANNEL_ALERTS_MSGS),
          n),
        ),
        Me = m.displayAuthor
          ? d.jsx("div", {
              className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
                ((a = {}),
                (a._ahm_ = !0),
                (a._ak_y =
                  m.displayType ===
                    o("WAWebDisplayType").DISPLAY_TYPE.ANNOUNCEMENT ||
                  m.displayType ===
                    o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER),
                a),
              ),
              children: d.jsx(r("WAWebMessageAuthor.react"), {
                msg: E,
                contact: w,
                displayType: m.displayType,
              }),
            })
          : null,
        we = $e
          ? d.jsx(r("WAWebMessageForwardedIndicator.react"), {
              msg: E.unsafe(),
              className: "_ahn1",
            })
          : null,
        Ae = d.jsx(r("WAWebMessagePaidPartnershipDisclaimerText.react"), {
          msg: E,
        }),
        Fe;
      switch (M) {
        case o("WAWebProtobufsE2E.pb").Message$VideoMessage$Attribution.GIPHY:
          Fe = d.jsx("div", {
            className: "_ahmy",
            children: d.jsx(o("WAWebGiphyIcon.react").GiphyIcon, {}),
          });
          break;
        case o("WAWebProtobufsE2E.pb").Message$VideoMessage$Attribution.TENOR:
          Fe = d.jsx("div", {
            className: "_ahmy",
            children: d.jsx(o("WAWebTenorIcon.react").TenorIcon, {}),
          });
          break;
        default:
          Fe = null;
      }
      var Oe = m.quotedMsg
          ? d.jsx("div", {
              className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
                ((i = {}),
                (i._ahn3 = !0),
                (i._al0h =
                  m.displayType ===
                    o("WAWebDisplayType").DISPLAY_TYPE.ANNOUNCEMENT ||
                  m.displayType ===
                    o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER),
                i),
              ),
              children: m.quotedMsg,
            })
          : null,
        Be =
          m.hideMeta === !0
            ? null
            : d.jsx("div", {
                className: "_ahmz",
                children: d.jsx(o("WAWebMessageMeta.react").Meta, {
                  msg: E,
                  displayType: m.displayType,
                }),
              }),
        We = d.jsx(r("WAWebMessageGifState.react"), {
          mediaStage: F.mediaStage,
          mediaDataFileSize: F.size,
          isFailed: x,
          shouldPlay: se(),
          onClick: ce,
        }),
        qe = { width: Ee, height: Le };
      if (
        m.displayType === o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER_PREVIEW
      ) {
        var Ue;
        ((be = null),
          (De = null),
          (xe = null),
          (Fe = null),
          (We = null),
          (qe.minHeight = (Ue = m.maxWidth) != null ? Ue : 56));
      }
      var Ve = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          ((l = {}),
          (l._ahn4 = !0),
          (l._anjk =
            m.displayType ===
            o("WAWebDisplayType").DISPLAY_TYPE.CHANNEL_ALERTS_MSGS),
          l),
        ),
        He = d.jsxs(d.Fragment, {
          children: [
            Me,
            we,
            Ae,
            Oe,
            d.jsx(r("WAWebBizCtwaContext.react"), {
              msg: E.unsafe(),
              wrapperClass: "_ahnb",
            }),
            d.jsxs(o("WAWebClickable.react").Clickable, {
              ref: he,
              dataTestId: "image-thumb-gif",
              className: Ve,
              onClick: ce,
              ariaLabel: u._(/*BTDS*/ "Play GIF"),
              inlineStyle: qe,
              children: [We, Te, be, xe, Fe],
            }),
            De,
            Be,
          ],
        });
      if (De)
        return d.jsx(r("WAWebMessageBubbleHiddenText.react"), {
          contact: w,
          msg: E.unsafe(),
          className: Ne,
          onClick: o("WAWebStopEvent").stopPropagation,
          style: {
            width: o("WAWebDisplayType").DISPLAY_TYPE.CHANNEL_ALERTS_MSGS
              ? "100%"
              : Re,
          },
          children: He,
        });
      var Ge = Re + C * 2;
      return d.jsx("div", {
        className: Ne,
        onClick: o("WAWebStopEvent").stopPropagation,
        style: {
          width: o("WAWebDisplayType").DISPLAY_TYPE.CHANNEL_ALERTS_MSGS
            ? "100%"
            : Ge,
        },
        children: He,
      });
    }
    L.displayName = L.name + " [from " + i.id + "]";
    var E = L;
    l.WrappedGif = E;
  },
  226,
);
