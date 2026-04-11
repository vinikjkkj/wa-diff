__d(
  "WAWebMediaLinkPreviewContainer.react",
  [
    "PaymentLink",
    "WAWebBotReelsPluginLinkPreview.react",
    "WAWebCmd",
    "WAWebCompactMapString",
    "WAWebDisplayType",
    "WAWebExternalLink.react",
    "WAWebFrontendMsgGetters",
    "WAWebLinkify",
    "WAWebLongLinkPop.react",
    "WAWebMediaDataUtils",
    "WAWebMediaDownloadMmsThumbnail",
    "WAWebMediaLinkPreview.react",
    "WAWebMediaLinkPreviewUtils",
    "WAWebModalManager",
    "WAWebMsgGetters",
    "WAWebMsgLinks",
    "WAWebPaymentLinkOrderDetailsHeader.react",
    "WAWebProtobufsAICommon.pb",
    "WAWebStatusContext",
    "WAWebStatusLinkFormatMutator",
    "WAWebSuspiciousLinkPopup.react",
    "WAWebURLUtils",
    "WAWebWamEnumUrlStatusClicked",
    "asyncToGeneratorRuntime",
    "punycode",
    "react",
    "useWAWebMsgValues",
    "useWAWebPrevious",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.memo,
      d = u.useContext,
      m = u.useEffect,
      p = u.useState;
    function _(e) {
      var t = e.displayType,
        a = e.horizontalLayout,
        i = a === void 0 ? !1 : a,
        l = e.isInvite,
        u = e.msg,
        c = e.onClick,
        _ = e.reelItem,
        g = e.theme,
        h = d(o("WAWebStatusContext").StatusContext),
        y = h.statusItemViewEventRef,
        C = p(null),
        b = C[0],
        v = C[1],
        S = p(null),
        R = S[0],
        L = S[1],
        E = o("useWAWebMsgValues").useMsgValues(u.id, [
          o("WAWebMsgGetters").getT,
          o("WAWebMsgGetters").getThumbnail,
          o("WAWebMsgGetters").getThumbnailHQ,
          o("WAWebMsgGetters").getThumbnailDirectPath,
          o("WAWebMsgGetters").getThumbnailHeight,
          o("WAWebMsgGetters").getThumbnailWidth,
          o("WAWebMsgGetters").getTitle,
          o("WAWebMsgGetters").getDescription,
          o("WAWebMsgGetters").getMatchedText,
          o("WAWebMsgGetters").getIsSentByMe,
          o("WAWebMsgGetters").getStar,
          o("WAWebFrontendMsgGetters").getAsUrl,
          o("WAWebMsgGetters").getInviteGrpType,
          o("WAWebMsgGetters").getIsKept,
          o("WAWebMsgGetters").getMediaKey,
          o("WAWebMsgGetters").getBotReelPluginThumbnailCdnUrl,
          o("WAWebMsgGetters").getPaymentLinkPreviewMetaTags,
        ]),
        k = E[0],
        I = E[1],
        T = E[2],
        D = E[3],
        x = E[4],
        $ = E[5],
        P = E[6],
        N = E[7],
        M = E[8],
        w = E[9],
        A = E[10],
        F = E[11],
        O = E[12],
        B = E[13],
        W = E[14],
        q = E[15],
        U = E[16],
        V = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = [
                {
                  width: 48,
                  height: 48,
                  imageFormat: "image/jpeg",
                  imageFormatOptions: 1,
                },
              ],
              n = yield o("WAWebMediaDataUtils").getResizedThumbData(e, t),
              r = n[0];
            L(r == null ? void 0 : r.dataUrl);
          });
          return function (n) {
            return e.apply(this, arguments);
          };
        })(),
        H = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = [
                {
                  width: 170,
                  height: 300,
                  imageFormat: "image/jpeg",
                  imageFormatOptions: 1,
                },
              ],
              n = yield o("WAWebMediaDataUtils").getResizedThumbData(e, t),
              r = n[0];
            v(r == null ? void 0 : r.dataUrl);
          });
          return function (n) {
            return e.apply(this, arguments);
          };
        })(),
        G = r("useWAWebPrevious")(D);
      m(
        function () {
          var e = F;
          (e != null &&
            (!e.thumbnailHQ || G !== D) &&
            !o("WAWebMediaLinkPreviewUtils").hqLinkPreviewExpired(k) &&
            r("WAWebMediaDownloadMmsThumbnail")({
              chat: o("WAWebFrontendMsgGetters").getMaybeChat(u),
              msg: e,
              isPreload: !1,
            }),
            q != null && H(q),
            _ != null && (H(_.thumbnailUrl), V(_.profileIconUrl)));
        },
        [F, W, k, u, D, G, q, _],
      );
      var z = null;
      l || (z = f(M));
      var j = o("WAWebMsgLinks").getLinksFromMsg(u),
        K = r("WAWebCompactMapString")(j, function (e) {
          return f(e.url);
        });
      if (
        _ == null &&
        z != null &&
        !K.some(function (e) {
          return e === z;
        })
      )
        return s.jsx("div", {});
      var Q = o("WAWebMsgLinks")
          .getSuspiciousLinks(u)
          .filter(function (e) {
            var t = e.url;
            return u.matchedText === t;
          }),
        X,
        Y,
        J,
        Z,
        ee,
        te,
        ne;
      if (
        (Q.length
          ? (ne = function () {
              var e = Q[0];
              o("WAWebModalManager").ModalManager.open(
                s.jsx(r("WAWebSuspiciousLinkPopup.react"), { link: e }),
              );
            })
          : ((ne = function () {
              var e,
                n = (e = _ == null ? void 0 : _.videoUrl) != null ? e : M,
                a = y == null ? void 0 : y.current;
              if (
                (a &&
                  a.urlStatusClicked ===
                    o("WAWebWamEnumUrlStatusClicked").URL_STATUS_CLICKED
                      .NO_CLICK &&
                  (a.urlStatusClicked = o(
                    "WAWebWamEnumUrlStatusClicked",
                  ).URL_STATUS_CLICKED.ONE_CLICK),
                t === o("WAWebDisplayType").DISPLAY_TYPE.STATUS)
              ) {
                var i = o("WAWebLinkify").findLink(n);
                if (i != null) {
                  var l = o("WAWebStatusLinkFormatMutator").cleanUrl(i),
                    u = l[0],
                    d = l[1],
                    m = o("WAWebStatusLinkFormatMutator").redactUrl(u, d);
                  if (m !== u + d) {
                    (o("WAWebModalManager").ModalManager.open(
                      s.jsx(r("WAWebLongLinkPop.react"), {
                        link: i,
                        statusItemViewEventRef: y,
                      }),
                    ),
                      o("WAWebCmd").Cmd.openLongLinkModal());
                    return;
                  }
                }
              }
              (o("WAWebExternalLink.react").openExternalLink(n), c && c());
            }),
            (X = N),
            (Y = I),
            o("WAWebMediaLinkPreviewUtils").hqLinkPreviewExpired(k) ||
              ((J = T), (Z = D), (ee = x), (te = $))),
        t === o("WAWebDisplayType").DISPLAY_TYPE.BOT_REELS_PLUGIN)
      ) {
        var re;
        return s.jsx(r("WAWebBotReelsPluginLinkPreview.react"), {
          title: (re = _ == null ? void 0 : _.title) != null ? re : P,
          handleClick: ne,
          onClick: ne,
          botReelPluginThumbnailUrl: b,
          reelProfilePictureUrl: R,
        });
      }
      var oe =
        o("PaymentLink").getPaymentLinkOrderHeaderComponentDisplayParams(U);
      return oe != null
        ? s.jsx(r("WAWebPaymentLinkOrderDetailsHeader.react"), {
            isSentByMe: w,
            matchedText: M,
            onClick: ne,
            parsedAmount: oe,
          })
        : s.jsx(r("WAWebMediaLinkPreview.react"), {
            description: X,
            displayType: t,
            isInvite: l,
            inviteGrpType: l === !0 ? O : null,
            onClick: ne,
            isSentByMe: w,
            thumbnailJpeg: Y,
            thumbnailJpegHQ: J,
            thumbnailJpegDirectPath: Z,
            thumbnailJpegHeight: ee,
            thumbnailJpegWidth: te,
            title: P,
            star: A,
            kept: B,
            theme: g,
            matchedText: z != null ? z : M,
            botPluginReferenceIndex:
              u.botPluginType ===
              o("WAWebProtobufsAICommon.pb").BotPluginMetadata$PluginType.SEARCH
                ? u.botPluginReferenceIndex
                : null,
            isLoading: !1,
            horizontalLayout: i,
          });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      var t = null;
      try {
        ((t = r("WAWebURLUtils").hostname(e)),
          (t = r("punycode").toUnicode(t)));
      } catch (e) {}
      return t;
    }
    var g = c(_);
    ((l.getHostnameForUrl = f), (l.LinkPreviewContainer = g));
  },
  98,
);
