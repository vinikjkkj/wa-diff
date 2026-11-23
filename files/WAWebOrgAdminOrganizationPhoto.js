__d(
  "WAWebOrgAdminOrganizationPhoto",
  [
    "WALogger",
    "WAWebImageUtils",
    "WAWebMediaLoad",
    "WAWebNonEmptyString",
    "WAWebProfileCropConstants",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      var t;
      return (t = o("WAWebNonEmptyString").asMaybeNonEmptyString(
        e == null ? void 0 : e.iconLargeURI,
      )) != null
        ? t
        : o("WAWebNonEmptyString").asMaybeNonEmptyString(
            e == null ? void 0 : e.iconURI,
          );
    }
    async function u(t) {
      var n = null;
      try {
        var a;
        n = await c(t);
        var i = await o("WAWebMediaLoad").image(n),
          l = i.fullHeight,
          s = i.fullWidth,
          u = Math.min(l, s),
          d = Math.min(
            Math.max(u, (a = o("WAWebProfileCropConstants")).PROF_PIC_MIN_SIDE),
            a.PROF_PIC_MAX_SIDE,
          ),
          m = {
            sHeight: u,
            sWidth: u,
            sX: (s - u) / 2,
            sY: (l - u) / 2,
            src: n,
          },
          p = await Promise.all([
            o("WAWebImageUtils").crop(
              babelHelpers.extends({}, m, { dHeight: d, dWidth: d }),
            ),
            o("WAWebImageUtils").crop(
              babelHelpers.extends({}, m, {
                dHeight: a.PROF_PIC_THUMB_SIDE,
                dWidth: a.PROF_PIC_THUMB_SIDE,
              }),
            ),
          ]),
          _ = p[0],
          f = p[1];
        return {
          full: o("WAWebNonEmptyString").asNonEmptyString(_.images.dataUrl),
          thumb: o("WAWebNonEmptyString").asNonEmptyString(f.images.dataUrl),
        };
      } catch (t) {
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[org-admin] organization photo could not be loaded",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("org-admin-organization-photo-load-failed"),
          null
        );
      } finally {
        n != null && window.URL.revokeObjectURL(n);
      }
    }
    async function c(e) {
      var t = await window.fetch(e, { cache: "no-store" });
      if (!t.ok)
        throw r("err")(
          "organization photo fetch failed with status %s",
          t.status,
        );
      return window.URL.createObjectURL(await t.blob());
    }
    ((l.getOrgAdminOrganizationPhotoURL = s), (l.loadOrgAdminPhotoImages = u));
  },
  98,
);
