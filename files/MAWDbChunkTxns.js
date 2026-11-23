__d(
  "MAWDbChunkTxns",
  [
    "MAWHMACPlaintextHash",
    "MAWODSProxy",
    "MWFBLogger",
    "WAErrorMessage",
    "WAOdsEnums",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = o("MWFBLogger").MWLogger().tags(["maw_db", "txn", "MAWDbChunkTxns"]),
      m = function (t, n, r, a, i, l) {
        l === void 0 && (l = 0);
        var e = o("MAWHMACPlaintextHash").genHMACPlaintextHash(n);
        return p(t, n, e, r, a, i, l);
      },
      p = function (n, r, a, i, l, m, _) {
        return (
          _ === void 0 && (_ = 0),
          n.chunk
            .where("hashedPlaintextHash")
            .equals(a)
            .first()
            .then(function (t) {
              var f = {
                blobData: i,
                hashedPlaintextHash: a,
                isProgressivePreview: m != null ? m : void 0,
                mimetype: l,
                plaintextHash: r,
              };
              if (t) {
                _ > 0 &&
                  d.DEBUG(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "Chunk found after retry for hashedPlaintextHash: ",
                        "",
                      ])),
                    a,
                  );
                var g = m !== !0 && t.isProgressivePreview === !0;
                if (g) {
                  var h = babelHelpers.extends({}, f, { chunkId: t.chunkId });
                  return n.chunk.put(h).then(function () {
                    return h;
                  });
                } else return t;
              }
              return n.chunk
                .add(f)
                .then(function (e) {
                  return babelHelpers.extends({}, f, { chunkId: e });
                })
                .catch(function (e) {
                  var t = o("WAErrorMessage").maybeGetMessageFromError(e);
                  if (_ > 0)
                    throw (
                      d.WARN(
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose([
                            "Failed to add chunk for hashedPlaintextHash: ",
                            ". Error: ",
                            "",
                          ])),
                        a,
                        t,
                      ),
                      d.MUSTFIX(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "Failed to add chunk after retry. Error: ",
                            "",
                          ])),
                        t,
                      ),
                      e
                    );
                  return (
                    d.WARN(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "Failed to add chunk. Possible duplicate? Will attempt a retry. For hashedPlaintextHash: ",
                          ". Error: ",
                          "",
                        ])),
                      a,
                      t,
                    ),
                    o("MAWODSProxy").odsBumpEntityKey({
                      amount: 1,
                      entity:
                        o("WAOdsEnums").Entity.MAW_MEDIA_DB_DUPLICATE_CHUNK,
                      key: "retry",
                    }),
                    p(n, r, a, i, l, m, _ + 1)
                  );
                });
            })
        );
      },
      _ = function (t, n) {
        return t.chunk.where("hashedPlaintextHash").equals(n);
      },
      f = function (t, n) {
        return _(t, n).first();
      },
      g = function (t, n) {
        var e = n.map(o("MAWHMACPlaintextHash").genHMACPlaintextHash);
        return t.chunk
          .where("hashedPlaintextHash")
          .anyOf(e)
          .toArray()
          .then(function (e) {
            return new Map(
              e.map(function (e) {
                return [e.plaintextHash, e];
              }),
            );
          });
      };
    ((l.getOrCreateMediaChunkWithPlaintextHash = m),
      (l.maybeGetChunkFromHash = f),
      (l.maybeBulkGetChunksFromPlaintextHash = g));
  },
  98,
);
