__d(
  "WAWebProductCatalogProductPostcodeChangeBanner",
  [
    "fbt",
    "WALogger",
    "WAWebBusinessDirectConnectionCollection",
    "WAWebClickableLink.react",
    "WAWebModalManager",
    "WAWebProductCollectionCatalogPostcodeChangeModal",
    "asyncToGeneratorRuntime",
    "react",
    "useBoolean",
    "useWAWebModelValues",
    "useWAWebUnmountSignal",
    "vulture",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useEffect,
      p = d.useState;
    function _(e) {
      var t = e.postcode,
        n = e.catalogWid,
        a = e.postcodeChangeSuccess;
      r("vulture")("rTXq1nkKsRPidRYfvGGAQTp-0N4=");
      var i = function () {
        o("WAWebModalManager").ModalManager.open(
          c.jsx(r("WAWebProductCollectionCatalogPostcodeChangeModal"), {
            existingPostcode: t,
            catalogId: n,
            onCancel: o("WAWebModalManager").closeModalManager,
            onSuccess: function () {
              (o("WAWebModalManager").ModalManager.close(), a());
            },
          }),
        );
      };
      return c.jsx(r("WAWebClickableLink.react"), {
        onClick: i,
        children: s._(/*BTDS*/ "Change"),
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      var t = e.businessDirectConnection,
        n = e.catalogWid,
        a = e.postcodeChangeSuccess;
      r("vulture")("NWZLY-Rha4wcV7i4WRRd5Q8-uCE=");
      var i = o("useWAWebModelValues").useModelValues(t, ["postcode"]),
        l = i.postcode;
      return l == null
        ? null
        : c.jsxs(c.Fragment, {
            children: [
              s._(/*BTDS*/ "Not available in {area-postcode}.", [
                s._param("area-postcode", l),
              ]),
              "\xA0",
              c.jsx(_, {
                postcode: l,
                catalogWid: n,
                postcodeChangeSuccess: a,
              }),
            ],
          });
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(t) {
      r("vulture")("ARk_zMsOVUKLGZzSCD0L_VSqzOw=");
      var a = t.catalogWid,
        i = t.postcodeChangeSuccess,
        l = p(null),
        s = l[0],
        u = l[1],
        d = r("useBoolean")(!0),
        _ = d.set,
        g = d.value,
        h = r("useWAWebUnmountSignal")();
      return (
        m(
          function () {
            var t = (function () {
              var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* () {
                  try {
                    var t = yield r(
                      "WAWebBusinessDirectConnectionCollection",
                    ).getCypher(a);
                    if (h.aborted) return;
                    u(t);
                  } catch (t) {
                    o("WALogger")
                      .ERROR(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[direct-connection] Setting cypher failed in PDP ",
                            "",
                          ])),
                        t,
                      )
                      .verbose()
                      .sendLogs(
                        "direct-connection-setting-cypher-failed-in-pdp",
                      );
                  }
                  h.aborted || _(!1);
                },
              );
              return function () {
                return t.apply(this, arguments);
              };
            })();
            t();
          },
          [a, _, h],
        ),
        g || s == null
          ? null
          : c.jsx(f, {
              businessDirectConnection: s,
              catalogWid: a,
              postcodeChangeSuccess: i,
            })
      );
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = g));
  },
  226,
);
