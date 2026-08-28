__d(
  "ZenonSDPInteropTransform",
  ["invariant", "sdp-transform"],
  function $module_ZenonSDPInteropTransform(
    global,
    require,
    importDefault,
    importNamespace,
    requireLazy,
    module,
    exports,
    invariant,
  ) {
    "use strict";

    exports.write = function (session, opts, options) {
      if (
        session !== undefined &&
        session.media !== undefined &&
        Array.isArray(session.media)
      ) {
        session.media.forEach(function (mLine) {
          var groupedSsrcs = [];
          var ungroupedSsrcs = Object.keys(mLine.sources || {});

          if (
            mLine.ssrcGroups !== undefined &&
            Array.isArray(mLine.ssrcGroups)
          ) {
            mLine.ssrcGroups.forEach(function (ssrcGroup) {
              if (
                ssrcGroup.ssrcs !== undefined &&
                Array.isArray(ssrcGroup.ssrcs)
              ) {
                var ssrcsArray = ssrcGroup.ssrcs;
                groupedSsrcs = groupedSsrcs.concat(ssrcsArray);
                ungroupedSsrcs = ungroupedSsrcs.filter(function (ssrc) {
                  return ssrcsArray.indexOf(ssrc) === -1;
                });
                ssrcGroup.ssrcs = ssrcsArray.join(" ");
              }
            });
          }

          if (
            mLine.sources !== undefined &&
            Object.keys(mLine.sources).length !== 0
          ) {
            var mLine_sources = mLine.sources;
            mLine_sources != null || invariant(0, 66290);

            var alreadyAddedSsrcs = new Set();
            var mLine_ssrcs = [];
            groupedSsrcs.concat(ungroupedSsrcs).forEach(function (ssrc) {
              var source = mLine_sources[ssrc];
              Object.keys(source).forEach(function (attribute) {
                var newSsrcKey = [
                  ssrc,
                  String(attribute),
                  String(source[attribute]),
                ].join("|");
                if (!alreadyAddedSsrcs.has(newSsrcKey)) {
                  mLine_ssrcs.push({
                    attribute: String(attribute),
                    id: parseInt(ssrc, 10),
                    value: String(source[attribute]),
                  });
                  alreadyAddedSsrcs.add(newSsrcKey);
                }
              });
            });
            mLine.ssrcs = mLine_ssrcs;
            if (options && options.iceOptions) {
              mLine.iceOptions = options.iceOptions;
            }
            delete mLine.sources;
          }
        });
      }

      if (
        session !== undefined &&
        session.groups !== undefined &&
        Array.isArray(session.groups)
      ) {
        session.groups.forEach(function (g) {
          if (g.mids !== undefined && Array.isArray(g.mids)) {
            g.mids = g.mids.join(" ");
          }
        });
      }

      return importDefault("sdp-transform").write(session, opts);
    };

    exports.parse = function (sdp) {
      var session = importDefault("sdp-transform").parse(sdp);

      if (
        session !== undefined &&
        session.media !== undefined &&
        Array.isArray(session.media)
      ) {
        session.media.forEach(function (mLine) {
          mLine.payloads = String(mLine.payloads);

          if (mLine.ssrcs !== undefined && Array.isArray(mLine.ssrcs)) {
            var mLine_sources = {};
            mLine.ssrcs.forEach(function (ssrc) {
              var ssrcId = ssrc.id.toString();
              if (!mLine_sources[ssrcId]) {
                mLine_sources[ssrcId] = {};
              }

              mLine_sources[ssrcId][ssrc.attribute] = ssrc.value;
            });
            mLine.sources = mLine_sources;

            delete mLine.ssrcs;
          }

          if (
            mLine.ssrcGroups !== undefined &&
            Array.isArray(mLine.ssrcGroups)
          ) {
            mLine.ssrcGroups.forEach(function (ssrcGroup) {
              if (typeof ssrcGroup.ssrcs === "string") {
                ssrcGroup.ssrcs = ssrcGroup.ssrcs.split(" ");
              }
            });
          }
        });
      }

      if (
        session !== undefined &&
        session.groups !== undefined &&
        Array.isArray(session.groups)
      ) {
        session.groups.forEach(function (g) {
          if (typeof g.mids === "string") {
            g.mids = g.mids.split(" ");
          }
        });
      }

      return session;
    };
  },
  34,
);
