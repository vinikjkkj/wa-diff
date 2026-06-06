__d(
  "WAWebContactProfilePicThumbBridge",
  [
    "WABase64",
    "WALogger",
    "WAWebBackendErrors",
    "WAWebChangeProfilePicThumb",
    "WAWebDBBulkPersistProfilePic",
    "WAWebFetchCommunityProfilePic",
    "WAWebFetchNewsletterProfilePic",
    "WAWebGetProfilePicJob",
    "WAWebProfilePicConstants",
    "WAWebSendProfilePictureJob",
    "WAWebURLUtils",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsMultiDevice",
    "WAWebWidFactory",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m;
    async function p(e) {
      var t = r("WAWebSendProfilePictureJob")(e, null).then(function () {
          return { status: 200 };
        }),
        n = await t;
      return (
        o("WAWebChangeProfilePicThumb").changeProfilePicThumb(
          e,
          o("WAWebProfilePicConstants").ProfilePicCommand.Remove,
        ),
        n
      );
    }
    async function _(e, t, n) {
      var a = r("WAWebURLUtils").parseDataURL(n).data,
        i = o("WABase64").decodeB64(a),
        l = r("WAWebSendProfilePictureJob")(e, i).then(async function () {
          var t = await o("WAWebGetProfilePicJob").getProfilePic(e, {
            preview: !1,
          });
          return {
            tag: t.tag,
            eurl: t.eurl,
            fullDirectPath: t.directPath,
            filehash: t.filehash,
            status: 200,
          };
        }),
        s = await l;
      return (
        o("WAWebChangeProfilePicThumb").changeProfilePicThumb(
          e,
          o("WAWebProfilePicConstants").ProfilePicCommand.Set,
        ),
        s
      );
    }
    function f(e, t) {
      var n, r, o, a, i, l;
      return {
        id: e.toString(),
        eurl: (n = t == null ? void 0 : t.eurl) != null ? n : null,
        previewEurl:
          (r = t == null ? void 0 : t.previewEurl) != null ? r : null,
        tag: (o = t == null ? void 0 : t.tag) != null ? o : null,
        previewDirectPath:
          (a = t == null ? void 0 : t.previewDirectPath) != null ? a : null,
        fullDirectPath:
          (i = t == null ? void 0 : t.fullDirectPath) != null ? i : null,
        filehash: (l = t == null ? void 0 : t.filehash) != null ? l : null,
        timestamp: Date.now(),
      };
    }
    async function g(e, t) {
      var n = f(e, t);
      await o("WAWebDBBulkPersistProfilePic").persistProfilePicBatched(n);
    }
    async function h(t, n) {
      var a = Promise.all([
        o("WAWebGetProfilePicJob").getProfilePic(
          t,
          babelHelpers.extends({}, n, { preview: !1 }),
        ),
        o("WAWebGetProfilePicJob").getProfilePic(
          t,
          babelHelpers.extends({}, n, { preview: !0 }),
        ),
      ]).then(function (e) {
        var t,
          n = e[0],
          r = e[1],
          o = {
            eurl: n.eurl,
            tag: n.tag,
            previewEurl: r.eurl,
            previewDirectPath: r.directPath,
            fullDirectPath: n.directPath,
          },
          a = (t = r.filehash) != null ? t : n.filehash;
        return (a != null && (o.filehash = a), o);
      });
      try {
        var i = await a;
        (g(t, i).catch(function (t) {
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "persistProfilePicToDB failed with error ",
                "",
              ])),
            r("getErrorSafe")(t).message,
          );
        }),
          C(t, i.eurl));
      } catch (e) {
        (C(t),
          y(t, r("getErrorSafe")(e)).catch(function (e) {
            o("WALogger").WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[profilePicFind] persistProfilePicToDB failed: ",
                  "",
                ])),
              r("getErrorSafe")(e).message,
            );
          }));
      }
      return a;
    }
    async function y(e, t) {
      if (t instanceof o("WAWebBackendErrors").ServerStatusCodeError) {
        var n = t.status;
        n === 500 || n === 501 || n === 503
          ? o("WALogger").WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "profilePicFind failed with serverCode: ",
                  "",
                ])),
              n,
            )
          : n === 404
            ? await g(e)
            : n === 401 && !e.isGroup() && (await g(e));
      }
    }
    function C(e, t) {
      e.equals(o("WAWebUserPrefsMeUser").getMaybeMePnUser()) &&
        o("WAWebUserPrefsMultiDevice").setCachedProfilePicEURL(
          t != null ? t : "",
        );
    }
    function b(e) {
      return Promise.all(
        e.map(async function (e) {
          try {
            var t = await h(e.id, {
              tcToken: e.tcToken,
              commonGid: e.commonGid,
            });
            return {
              id: e.id,
              eurl: t.eurl,
              tag: t.tag,
              previewEurl: t.previewEurl,
              previewDirectPath: t.previewDirectPath,
              fullDirectPath: t.fullDirectPath,
              filehash: t.filehash,
              stale: !1,
              eurlStale: !1,
              timestamp: Date.now(),
            };
          } catch (t) {
            if (t instanceof o("WAWebBackendErrors").ServerStatusCodeError)
              switch (t.status) {
                case 401:
                case 404:
                  return {
                    tag: "",
                    id: e.id,
                    stale: !1,
                    eurlStale: !1,
                    timestamp: Date.now(),
                  };
                default:
                  return (
                    o("WALogger").WARN(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "ProfilePicThumb:resyncPictures error - ",
                          ", ",
                          "",
                        ])),
                      t.status,
                      t.message,
                    ),
                    {
                      id: e.id,
                      stale: !1,
                      eurlStale: !1,
                      timestamp: Date.now(),
                    }
                  );
              }
            throw t;
          }
        }),
      );
    }
    async function v(e) {
      var t = e.commonGid,
        n = e.id,
        a = e.newsletterRole,
        i = e.parentGroupId,
        l = e.tcToken;
      try {
        if (n.isNewsletter()) {
          var s = await o(
            "WAWebFetchNewsletterProfilePic",
          ).fetchNewsletterProfilePic(
            o("WAWebWidFactory").asNewsletterWidOrThrow(n),
            a,
          );
          return (
            g(n, s).catch(function (e) {
              o("WALogger").WARN(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "persistProfilePicToDB failed with error ",
                    "",
                  ])),
                r("getErrorSafe")(e).message,
              );
            }),
            s
          );
        }
        if (i != null) {
          var u = await o(
            "WAWebFetchCommunityProfilePic",
          ).fetchCommunityProfilePic(n, i);
          return (
            g(n, u).catch(function (e) {
              o("WALogger").WARN(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "persistProfilePicToDB failed with error ",
                    "",
                  ])),
                r("getErrorSafe")(e).message,
              );
            }),
            u
          );
        }
        var c = await h(n, { tcToken: l, commonGid: t }),
          p = babelHelpers.extends({}, c, {
            id: n,
            timestamp: Date.now(),
            eurlStale: !1,
            stale: !1,
          });
        return p;
      } catch (e) {
        if (e instanceof o("WAWebBackendErrors").ServerStatusCodeError) {
          var _ = { id: n };
          switch (e.status) {
            case 401:
            case 404:
              ((_.tag = ""),
                (_.timestamp = Date.now()),
                (_.eurlStale = !1),
                (_.stale = !1));
              break;
            case 423:
              _.stale = !0;
              break;
            case 429:
              _.stale = !0;
              break;
            default:
              _.eurlStale = !1;
              break;
          }
          return Promise.resolve(_);
        }
        throw e;
      }
    }
    ((l.requestDeletePicture = p),
      (l.sendSetPicture = _),
      (l.mapProfilePictureToProfilePicThumbRowType = f),
      (l.persistProfilePicToDB = g),
      (l.profilePicResync = b),
      (l.requestProfilePicFromServer = v));
  },
  98,
);
