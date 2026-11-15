__d(
  "WAWebOrgAdminOrganizationPhoto",
  [
    "Promise",
    "WALogger",
    "WAWebImageUtils",
    "WAWebMediaLoad",
    "WAWebNonEmptyString",
    "WAWebProfileCropConstants",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      var t;
      return (t = o("WAWebNonEmptyString").asMaybeNonEmptyString(
        e == null ? void 0 : e.iconLargeURI,
      )) != null
        ? t
        : o("WAWebNonEmptyString").asMaybeNonEmptyString(
            e == null ? void 0 : e.iconURI,
          );
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = null;
          try {
            var i;
            a = yield m(t);
            var l = yield o("WAWebMediaLoad").image(a),
              u = l.fullHeight,
              c = l.fullWidth,
              d = Math.min(u, c),
              p = Math.min(
                Math.max(
                  d,
                  (i = o("WAWebProfileCropConstants")).PROF_PIC_MIN_SIDE,
                ),
                i.PROF_PIC_MAX_SIDE,
              ),
              _ = {
                sHeight: d,
                sWidth: d,
                sX: (c - d) / 2,
                sY: (u - d) / 2,
                src: a,
              },
              f = yield (s || (s = n("Promise"))).all([
                o("WAWebImageUtils").crop(
                  babelHelpers.extends({}, _, { dHeight: p, dWidth: p }),
                ),
                o("WAWebImageUtils").crop(
                  babelHelpers.extends({}, _, {
                    dHeight: o("WAWebProfileCropConstants").PROF_PIC_THUMB_SIDE,
                    dWidth: o("WAWebProfileCropConstants").PROF_PIC_THUMB_SIDE,
                  }),
                ),
              ]),
              g = f[0],
              h = f[1];
            return {
              full: o("WAWebNonEmptyString").asNonEmptyString(g.images.dataUrl),
              thumb: o("WAWebNonEmptyString").asNonEmptyString(
                h.images.dataUrl,
              ),
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
            a != null && window.URL.revokeObjectURL(a);
          }
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield window.fetch(e, { cache: "no-store" });
          if (!t.ok)
            throw r("err")(
              "organization photo fetch failed with status %s",
              t.status,
            );
          return window.URL.createObjectURL(yield t.blob());
        })),
        p.apply(this, arguments)
      );
    }
    ((l.getOrgAdminOrganizationPhotoURL = u), (l.loadOrgAdminPhotoImages = c));
  },
  98,
);
