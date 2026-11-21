__d(
  "WAWebInboundMsgLidMetadata",
  [
    "WALogger",
    "WAWebApiContact",
    "WAWebUpdateLidMetadataJob",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = ["displayNameLID", "shareOwnPn"];
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = d(t);
          if (n.length !== 0)
            try {
              var a = yield o("WAWebApiContact").bulkGetContactRecord(
                  n.map(function (e) {
                    var t = e.lid;
                    return t;
                  }),
                ),
                i = n.flatMap(function (e, t) {
                  var n = e.data,
                    r = e.lid,
                    o = m(n, a[t]);
                  return Object.keys(o).length > 0 ? [{ data: o, lid: r }] : [];
                });
              i.length > 0 &&
                (yield o("WAWebUpdateLidMetadataJob").updateLidMetadataJob(i));
            } catch (t) {
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[inbound-msg-queue] writing the contact metadata of queued messages failed",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .tags("messaging")
                .sendLogs("inbound-msg-lid-metadata-write-failed");
            }
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      var t = new Map();
      return (
        e.forEach(function (e) {
          var n,
            r = e.data,
            o = e.lid;
          t.set(o, {
            data: babelHelpers.extends(
              {},
              (n = t.get(o)) == null ? void 0 : n.data,
              r,
            ),
            lid: o,
          });
        }),
        Array.from(t.values())
      );
    }
    function m(e, t) {
      var n = e.displayNameLID,
        r = e.shareOwnPn,
        o = babelHelpers.objectWithoutPropertiesLoose(e, s),
        a = babelHelpers.extends({}, o);
      return (
        r != null &&
          r !== (t == null ? void 0 : t.shareOwnPn) &&
          (a.shareOwnPn = r),
        n != null &&
          n !== (t == null ? void 0 : t.displayNameLID) &&
          (a.displayNameLID = n),
        a
      );
    }
    l.writeInboundMsgLidMetadata = u;
  },
  98,
);
