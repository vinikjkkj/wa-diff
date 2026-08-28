__d(
  "ZenonSDP",
  [
    "FBLogger",
    "ODS",
    "ZenonBrowsers",
    "ZenonSDPInteropTransform",
    "gkx",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function () {
        function t(e, t) {
          var n = e.sdp;
          ((this.$1 =
            n == null ? null : o("ZenonSDPInteropTransform").parse(n)),
            (this.$2 = e.type),
            (this.$3 = t));
        }
        var n = t.prototype;
        return (
          (n.$4 = function (t, n, r) {
            var e = t.split(";"),
              o = e.findIndex(function (e) {
                return e.startsWith(n + "=");
              }),
              a = n + "=" + r;
            return (o >= 0 ? (e[o] = a) : e.push(a), "" + e.join(";"));
          }),
          (n.getMedia = function () {
            var e,
              t,
              n =
                (e = (t = this.$1) == null ? void 0 : t.media) != null ? e : [];
            return n;
          }),
          (n.getGroups = function () {
            var e, t;
            return (e = (t = this.$1) == null ? void 0 : t.groups) != null
              ? e
              : null;
          }),
          (n.getMsidSemantic = function () {
            var e;
            return (e = this.$1) == null ? void 0 : e.msidSemantic;
          }),
          (n.getDtlsAuthenticationInfo = function () {
            var e;
            return (e = this.$1) == null ? void 0 : e.dtlsAuthenticationInfo;
          }),
          (n.getMediaCname = function () {
            var e,
              t = "",
              n = (e = this.$1) == null ? void 0 : e.media;
            return (
              n != null &&
                n.some(function (e) {
                  return e.sources == null
                    ? !1
                    : Object.keys(e.sources).some(function (n) {
                        if (n != null && typeof n == "string") {
                          var o = r("nullthrows")(e.sources)[n];
                          if (o != null && o.cname != null)
                            return ((t = o.cname), !0);
                        }
                        return !1;
                      });
                }),
              t
            );
          }),
          (n.getTrackIdAndCnameMap = function () {
            var e,
              t = this,
              n = new Map(),
              r = (e = this.$1) == null ? void 0 : e.media;
            return (
              r == null ||
                r.forEach(function (e) {
                  var r = e.msid,
                    o = e.sources,
                    a = t.$5(r),
                    i = t.$6(o);
                  a != null && i != null && n.set(a, i);
                }),
              n
            );
          }),
          (n.getActiveTrackIDs = function () {
            var e,
              t = [],
              n = (e = this.$1) == null ? void 0 : e.media;
            return (
              n == null ||
                n.forEach(function (e) {
                  var n = e.msid;
                  if (n != null) {
                    var r = n.split(" ");
                    r.length >= 2 &&
                      r[0] !== "-" &&
                      e.direction !== "inactive" &&
                      t.push(r[1]);
                  }
                }),
              t
            );
          }),
          (n.$6 = function (t) {
            var e = null;
            return (
              t != null &&
                Object.keys(t).some(function (n) {
                  if (n != null && typeof n == "string") {
                    var o = r("nullthrows")(t)[n];
                    if (o != null && o.cname != null)
                      return ((e = o.cname), !0);
                  }
                  return !1;
                }),
              e
            );
          }),
          (n.$5 = function (t) {
            if (t != null) {
              var e = t.split(" ");
              if (e.length >= 2) return e[1];
            }
            return null;
          }),
          (n.addFmtpConfig = function (t, n, r) {
            var e,
              o = this,
              a = (e = this.$1) == null ? void 0 : e.media;
            a != null &&
              a.forEach(function (e) {
                e.rtp
                  .filter(function (e) {
                    return e.codec === t;
                  })
                  .forEach(function (t) {
                    var a = e.fmtp.find(function (e) {
                      return e.payload === t.payload;
                    });
                    a == null
                      ? e.fmtp.push({ config: n + "=" + r, payload: t.payload })
                      : (a.config = o.$4(a.config, n, r));
                  });
              });
          }),
          (n.maybeAddPtimeForOpusOnly = function (t) {
            var e,
              n = (e = this.$1) == null ? void 0 : e.media;
            n != null &&
              n.forEach(function (e) {
                if (e.type === "audio") {
                  var n =
                    e.rtp.filter(function (e) {
                      return e.codec !== "opus";
                    }).length >= 1;
                  if (!n) {
                    var r = e.rtp.find(function (e) {
                      return e.codec === "opus";
                    });
                    r != null && e.ptime == null && (e.ptime = t);
                  }
                }
              });
          }),
          (n.addAudioNACK = function () {
            var e,
              t = (e = this.$1) == null ? void 0 : e.media;
            t != null &&
              t.forEach(function (e) {
                e.type === "audio" &&
                  (e.rtcpFb == null && (e.rtcpFb = []),
                  e.rtp.forEach(function (t) {
                    var n;
                    if (
                      !(
                        (n = e.rtcpFb) != null &&
                        n.some(function (e) {
                          return e.payload === t.payload && e.type === "nack";
                        })
                      )
                    ) {
                      var r;
                      (r = e.rtcpFb) == null ||
                        r.push({ payload: t.payload, type: "nack" });
                    }
                  }));
              });
          }),
          (n.replaceAudioCname = function (t) {
            var e,
              n = (e = this.$1) == null ? void 0 : e.media;
            n != null &&
              n.forEach(function (e) {
                e.type === "audio" &&
                  e.sources != null &&
                  Object.keys(e.sources).forEach(function (n) {
                    if (n != null && typeof n == "string") {
                      var o = r("nullthrows")(e.sources)[n];
                      o != null && o.cname != null && (o.cname = t + o.cname);
                    }
                  });
              });
          }),
          (n.filterExtension = function (t, n) {
            var e,
              r = (e = this.$1) == null ? void 0 : e.media;
            r != null &&
              r.forEach(function (e) {
                e.type === n &&
                  e.ext != null &&
                  (e.ext = e.ext.filter(function (e) {
                    return !e.uri.includes(t);
                  }));
              });
          }),
          (n.processDTLSOverCrypto = function () {
            var e,
              t = (e = this.$1) == null ? void 0 : e.media;
            t != null &&
              t.forEach(function (e) {
                e.fingerprint != null && delete e.crypto;
              });
          }),
          (n.getUniqueDtlsFingerprints = function () {
            var e,
              t = (e = this.$1) == null ? void 0 : e.media,
              n = new Map();
            return (
              t != null &&
                t.forEach(function (e) {
                  if (e.fingerprint != null) {
                    var t = {
                      algo: e.fingerprint.type,
                      digest: e.fingerprint.hash,
                    };
                    n.has(t.digest) || n.set(t.digest, t);
                  }
                }),
              Array.from(n.values())
            );
          }),
          (n.updateDtlsAuthenticationInfo = function (t) {
            this.$1 != null && (this.$1.dtlsAuthenticationInfo = t);
          }),
          (n.addSetupActPass = function () {
            if (this.$2 === "offer") {
              var e,
                t = (e = this.$1) == null ? void 0 : e.media;
              t != null &&
                t.forEach(function (e) {
                  e.setup == null && (e.setup = "actpass");
                });
            }
          }),
          (n.getSSLRole = function () {
            var e, t;
            return this.$2 !== "answer"
              ? null
              : (e =
                    (t = this.$1) == null ||
                    (t = t.media) == null ||
                    (t = t.find(function (e) {
                      return e.setup != null;
                    })) == null
                      ? void 0
                      : t.setup) != null
                ? e
                : null;
          }),
          (n.setSSLRole = function (t) {
            if (this.$2 === "answer") {
              var e,
                n = (e = this.$1) == null ? void 0 : e.media;
              n != null &&
                n.forEach(function (e) {
                  e.setup == null && (e.setup = t);
                });
            }
          }),
          (n.removeCodec = function (t) {
            var e,
              n = (e = this.$1) == null ? void 0 : e.media;
            n != null &&
              n.forEach(function (e) {
                var n = e.rtp
                    .filter(function (e) {
                      return e.codec === t;
                    })
                    .map(function (e) {
                      var t = e.payload;
                      return t;
                    }),
                  r = e.fmtp
                    .filter(function (e) {
                      var t = e.config.match(/apt=(\d*)/);
                      return t != null ? n.includes(Number(t[1])) : !1;
                    })
                    .map(function (e) {
                      var t = e.payload;
                      return t;
                    }),
                  o = n.concat(r);
                if (!(o.length < 1)) {
                  ((e.rtp = e.rtp.filter(function (e) {
                    return !o.includes(e.payload);
                  })),
                    (e.fmtp = e.fmtp.filter(function (e) {
                      return !o.includes(e.payload);
                    })),
                    e.rtcpFb != null &&
                      (e.rtcpFb = e.rtcpFb.filter(function (e) {
                        return !o.includes(e.payload);
                      })),
                    e.rtcpFbTrrInt != null &&
                      (e.rtcpFbTrrInt = e.rtcpFbTrrInt.filter(function (e) {
                        return !o.includes(e.payload);
                      })));
                  var a = new RegExp("(" + o.join("|") + ") ?", "g");
                  e.payloads = e.payloads.replace(a, "").trim();
                }
              });
          }),
          (n.preferCodec = function (t, n) {
            var e,
              r = n.preferredCodec,
              o = n.preferredCodecRate,
              a = (e = this.$1) == null ? void 0 : e.media;
            a != null &&
              a.forEach(function (e) {
                if (e.type === t) {
                  var n = e.rtp.find(function (e) {
                    return e.codec === r && e.rate === o;
                  });
                  n != null &&
                    ((e.payloads = e.payloads
                      .replace(
                        new RegExp("(^|\\s)" + n.payload + "(\\s|$)", "g"),
                        " ",
                      )
                      .trim()),
                    (e.payloads = n.payload + " " + e.payloads));
                }
              });
          }),
          (n.mungeInactiveMediaSSRC = function (t) {
            var e,
              n = new Map();
            t != null &&
              t.$1 != null &&
              t.$1.media != null &&
              t.$1.media.forEach(function (e) {
                e.sources != null && e.mid != null && n.set(e.mid, e.sources);
              });
            var r = (e = this.$1) == null ? void 0 : e.media;
            r == null ||
              r.forEach(function (e) {
                if (
                  e.mid != null &&
                  e.direction === "inactive" &&
                  e.sources == null
                ) {
                  var t = n.get(e.mid);
                  t != null && (e.sources = t);
                }
              });
          }),
          (n.preferH264Codec = function (t) {
            var e,
              n = (e = this.$1) == null ? void 0 : e.media;
            n != null &&
              n.forEach(function (e) {
                if (e.type === "video") {
                  var n = [];
                  e.rtp.forEach(function (e) {
                    e.codec === "H264" && n.push(e.payload);
                  });
                  var r = t.levelAsymmetryAllowed ? "1" : "0",
                    o = t.packetizationMode ? "1" : "0",
                    a = new RegExp(
                      "level-asymmetry-allowed=" +
                        r +
                        ";packetization-mode=" +
                        o +
                        ";profile-level-id=" +
                        t.profileLevelId,
                    ),
                    i = e.fmtp.find(function (e) {
                      return e.config.match(a) && n.includes(e.payload);
                    });
                  i != null &&
                    ((e.payloads = e.payloads.replace(i.payload + " ", "")),
                    (e.payloads = i.payload + " " + e.payloads));
                }
              });
          }),
          (n.removeH264CodecsWithProfileLevelId = function (t) {
            this.removeH264CodecsMatchingRegex(
              new RegExp("profile-level-id=" + t),
            );
          }),
          (n.removeH264CodecsWithPacketizationMode0 = function () {
            this.removeH264CodecsMatchingRegex(/packetization-mode=0/);
          }),
          (n.removeH264CodecsMatchingRegex = function (t) {
            var e,
              n = (e = this.$1) == null ? void 0 : e.media;
            n != null &&
              n.forEach(function (e) {
                var n = e.fmtp
                    .filter(function (e) {
                      return e.config.match(t);
                    })
                    .map(function (e) {
                      var t = e.payload;
                      return t;
                    }),
                  r = e.fmtp
                    .filter(function (e) {
                      var t = e.config.match(/apt=(\d*)/);
                      return t != null ? n.includes(Number(t[1])) : !1;
                    })
                    .map(function (e) {
                      var t = e.payload;
                      return t;
                    }),
                  o = n.concat(r);
                if (!(o.length < 1)) {
                  ((e.rtp = e.rtp.filter(function (e) {
                    return !o.includes(e.payload);
                  })),
                    (e.fmtp = e.fmtp.filter(function (e) {
                      return !o.includes(e.payload);
                    })),
                    e.rtcpFb != null &&
                      (e.rtcpFb = e.rtcpFb.filter(function (e) {
                        return !o.includes(e.payload);
                      })),
                    e.rtcpFbTrrInt != null &&
                      (e.rtcpFbTrrInt = e.rtcpFbTrrInt.filter(function (e) {
                        return !o.includes(e.payload);
                      })));
                  var a = new RegExp("(" + o.join("|") + ") ?", "g");
                  e.payloads = e.payloads.replace(a, "").trim();
                }
              });
          }),
          (n.stripDataChannel = function () {
            var e,
              t,
              n = (e = this.$1) == null ? void 0 : e.media,
              r = (t = this.$1) == null ? void 0 : t.groups,
              o = null;
            (n != null &&
              n.forEach(function (e) {
                e.type === "application" &&
                  e.protocol.includes("RTP") &&
                  ((e.port = 0),
                  (e.protocol = "UDP/DTLS/SCTP"),
                  (o = typeof e.mid == "number" ? e.mid.toString() : e.mid),
                  (e.rtp = []),
                  (e.payloads = "webrtc-datachannel"));
              }),
              r != null &&
                o !== null &&
                r.forEach(function (e) {
                  var t =
                    typeof e.mids == "string" ? e.mids.split(" ") : e.mids;
                  e.mids = t.filter(function (e) {
                    return e !== o;
                  });
                }));
          }),
          (n.stripLocalIceCandidates = function () {
            var t,
              n = (t = this.$1) == null ? void 0 : t.media;
            n != null &&
              n.forEach(function (t) {
                var n;
                ((t.candidates =
                  (n = t.candidates) == null
                    ? void 0
                    : n.filter(function (t) {
                        var n = !t.ip.includes("local");
                        return (
                          n ||
                            (e || (e = o("ODS"))).bumpEntityKey(
                              4083,
                              "zenon_ops",
                              "removing_local_candidates_count",
                            ),
                          n
                        );
                      })),
                  (e || (e = o("ODS"))).flush());
              });
          }),
          (n.convertMediaSetupActpass = function () {
            var e,
              t = (e = this.$1) == null ? void 0 : e.media;
            t != null &&
              t.forEach(function (e) {
                e.type !== "application" && (e.setup = "actpass");
              });
          }),
          (n.copyWithTypeAndActpass = function (t) {
            throw r("FBLogger")("rtc_www").mustfixThrow(
              "Abstract parent method was called instead of child method",
            );
          }),
          (n.copyWithType = function (t) {
            throw r("FBLogger")("rtc_www").mustfixThrow(
              "Abstract parent method was called instead of child method",
            );
          }),
          (n.setVersion = function (t) {
            this.$1 != null && (this.$1.origin.sessionVersion = t);
          }),
          (n.getType = function () {
            return this.$2;
          }),
          (n.setType = function (t) {
            this.$2 = t;
          }),
          (n.$7 = function () {
            return r("gkx")("19553") || r("gkx")("19554")
              ? !1
              : o("ZenonBrowsers").isChrome() ||
                  o("ZenonBrowsers").isChromiumBasedEdge() ||
                  o("ZenonBrowsers").isOpera() ||
                  o("ZenonBrowsers").isSamsung();
          }),
          (n.toDescInit = function () {
            var e,
              t = function (t) {
                return t != null && t.split(" ").includes("renomination");
              },
              n = "trickle fb-force-5245";
            if (
              ((this.isRemote()
                ? (e = this.$1) != null &&
                  e.media.every(function (e) {
                    return t(e.iceOptions);
                  })
                : this.$7()) && (n += " renomination"),
              this.$1 != null)
            ) {
              var r;
              return {
                sdp:
                  (r = o("ZenonSDPInteropTransform").write(
                    this.$1,
                    {},
                    { iceOptions: n },
                  )) != null
                    ? r
                    : "",
                type: this.$2,
              };
            } else return { type: this.$2 };
          }),
          (n.toDesc = function () {
            var e = this.toDescInit(),
              t = e.sdp,
              n = e.type;
            return new RTCSessionDescription({ sdp: t, type: n });
          }),
          (n.isRemote = function () {
            return this.$3 === "remote";
          }),
          (n.toLoggingString = function () {
            var e = "\n",
              t = [" IP4 ", " IP6 "],
              n = this.toDesc().sdp.split(e);
            return (
              n.forEach(function (e, r) {
                e.startsWith("a=crypto:")
                  ? (n[r] = "a=crypto:**-----**")
                  : e.startsWith("a=candidate:")
                    ? (n[r] = "a=candidate:**-----**")
                    : t.forEach(function (t) {
                        var o = e.indexOf(t);
                        o !== -1 &&
                          (n[r] = e.slice(0, o + t.length) + "**-----**");
                      });
              }),
              n.join(e)
            );
          }),
          (n.enableExtension = function (t, n, r) {
            var e,
              o = (e = this.$1) == null ? void 0 : e.media;
            o == null ||
              o.forEach(function (e) {
                var o, a, i;
                e.ext == null && (e.ext = []);
                var l =
                  (o =
                    (a = e.ext) == null
                      ? void 0
                      : a.some(function (e) {
                          return e.uri === t;
                        })) != null
                    ? o
                    : !1;
                l ||
                  (n !== "" && e.type !== n) ||
                  (i = e.ext) == null ||
                  i.push({ uri: t, value: r });
              });
          }),
          (n.updateMSection = function (t, n) {
            var e,
              a,
              i = o("ZenonSDPInteropTransform").parse(n),
              l = i.media;
            if (l.length < 1)
              throw r("FBLogger")("rtc_www").mustfixThrow(
                "Could not parse body from delta SDP",
              );
            var s = l[0],
              u =
                (e = (a = this.$1) == null ? void 0 : a.media) != null ? e : [];
            t < u.length ? (u[t] = s) : u.push(s);
          }),
          (n.updateMids = function (t) {
            var e,
              n = (e = this.$1) == null ? void 0 : e.groups,
              r =
                n == null
                  ? void 0
                  : n.find(function (e) {
                      return e.type === "BUNDLE";
                    });
            if (r) {
              var o;
              typeof r.mids == "string"
                ? (o = r.mids.split(" "))
                : (o = r.mids);
              var a = new Set([].concat(o, t));
              r.mids = Array.from(a);
            } else
              (n == null || n.push({ mids: t, type: "BUNDLE" }),
                this.$1 != null && (this.$1.groups = n));
          }),
          (n.fetchVideoCodec = function () {
            var e,
              t = new Map(),
              n = (e = this.$1) == null ? void 0 : e.media;
            return (
              n != null &&
                n.forEach(function (e) {
                  if (e.type === "video") {
                    var n,
                      r = "",
                      o = (n = e.msid) == null ? void 0 : n.split(" ");
                    o != null &&
                      o.length > 0 &&
                      o[0].length > 0 &&
                      (r = o.length === 2 ? o[1] : o[0]);
                    var a = [];
                    (e.rtp.forEach(function (e) {
                      a.push(e.codec);
                    }),
                      t.set(r, a));
                  }
                }),
              t
            );
          }),
          (n.updateMsidSemantic = function () {
            var e,
              t = (e = this.$1) == null ? void 0 : e.media,
              n = new Set();
            (t == null ||
              t.forEach(function (e) {
                var t,
                  r = (t = e.msid) == null ? void 0 : t.split(" ");
                r != null &&
                  r.length > 0 &&
                  r[0].length > 0 &&
                  r[0] !== "-" &&
                  n.add(r[0]);
              }),
              this.$1 != null &&
                (this.$1.msidSemantic = {
                  semantic: "WMS",
                  token: Array.from(n).join(" "),
                }));
          }),
          t
        );
      })(),
      u = (function (e) {
        function t(t) {
          return e.call(this, t, "local") || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.copyWithTypeAndActpass = function (n) {
            var e = new t({ sdp: this.toDesc().sdp, type: n });
            return (e.convertMediaSetupActpass(), e);
          }),
          t
        );
      })(s),
      c = (function (e) {
        function t(t) {
          return e.call(this, t, "remote") || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.copyWithType = function (n) {
            return new t({ sdp: this.toDesc().sdp, type: n });
          }),
          t
        );
      })(s);
    ((l.ZenonSDP = s), (l.ZenonLocalSDP = u), (l.ZenonRemoteSDP = c));
  },
  98,
);
