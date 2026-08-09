__d(
  "exif-js-2.3.0",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {},
      l = { exports: e };
    function s() {
      (function () {
        var t = !1,
          n = this,
          r = function (e) {
            if (e instanceof r) return e;
            if (!(this instanceof r)) return new r(e);
            this.EXIFwrapped = e;
          };
        typeof e != "undefined"
          ? (typeof l != "undefined" && l.exports && (e = l.exports = r),
            (e.EXIF = r))
          : (n.EXIF = r);
        var o = (r.Tags = {
            36864: "ExifVersion",
            40960: "FlashpixVersion",
            40961: "ColorSpace",
            40962: "PixelXDimension",
            40963: "PixelYDimension",
            37121: "ComponentsConfiguration",
            37122: "CompressedBitsPerPixel",
            37500: "MakerNote",
            37510: "UserComment",
            40964: "RelatedSoundFile",
            36867: "DateTimeOriginal",
            36868: "DateTimeDigitized",
            37520: "SubsecTime",
            37521: "SubsecTimeOriginal",
            37522: "SubsecTimeDigitized",
            33434: "ExposureTime",
            33437: "FNumber",
            34850: "ExposureProgram",
            34852: "SpectralSensitivity",
            34855: "ISOSpeedRatings",
            34856: "OECF",
            37377: "ShutterSpeedValue",
            37378: "ApertureValue",
            37379: "BrightnessValue",
            37380: "ExposureBias",
            37381: "MaxApertureValue",
            37382: "SubjectDistance",
            37383: "MeteringMode",
            37384: "LightSource",
            37385: "Flash",
            37396: "SubjectArea",
            37386: "FocalLength",
            41483: "FlashEnergy",
            41484: "SpatialFrequencyResponse",
            41486: "FocalPlaneXResolution",
            41487: "FocalPlaneYResolution",
            41488: "FocalPlaneResolutionUnit",
            41492: "SubjectLocation",
            41493: "ExposureIndex",
            41495: "SensingMethod",
            41728: "FileSource",
            41729: "SceneType",
            41730: "CFAPattern",
            41985: "CustomRendered",
            41986: "ExposureMode",
            41987: "WhiteBalance",
            41988: "DigitalZoomRation",
            41989: "FocalLengthIn35mmFilm",
            41990: "SceneCaptureType",
            41991: "GainControl",
            41992: "Contrast",
            41993: "Saturation",
            41994: "Sharpness",
            41995: "DeviceSettingDescription",
            41996: "SubjectDistanceRange",
            40965: "InteroperabilityIFDPointer",
            42016: "ImageUniqueID",
          }),
          a = (r.TiffTags = {
            256: "ImageWidth",
            257: "ImageHeight",
            34665: "ExifIFDPointer",
            34853: "GPSInfoIFDPointer",
            40965: "InteroperabilityIFDPointer",
            258: "BitsPerSample",
            259: "Compression",
            262: "PhotometricInterpretation",
            274: "Orientation",
            277: "SamplesPerPixel",
            284: "PlanarConfiguration",
            530: "YCbCrSubSampling",
            531: "YCbCrPositioning",
            282: "XResolution",
            283: "YResolution",
            296: "ResolutionUnit",
            273: "StripOffsets",
            278: "RowsPerStrip",
            279: "StripByteCounts",
            513: "JPEGInterchangeFormat",
            514: "JPEGInterchangeFormatLength",
            301: "TransferFunction",
            318: "WhitePoint",
            319: "PrimaryChromaticities",
            529: "YCbCrCoefficients",
            532: "ReferenceBlackWhite",
            306: "DateTime",
            270: "ImageDescription",
            271: "Make",
            272: "Model",
            305: "Software",
            315: "Artist",
            33432: "Copyright",
          }),
          i = (r.GPSTags = {
            0: "GPSVersionID",
            1: "GPSLatitudeRef",
            2: "GPSLatitude",
            3: "GPSLongitudeRef",
            4: "GPSLongitude",
            5: "GPSAltitudeRef",
            6: "GPSAltitude",
            7: "GPSTimeStamp",
            8: "GPSSatellites",
            9: "GPSStatus",
            10: "GPSMeasureMode",
            11: "GPSDOP",
            12: "GPSSpeedRef",
            13: "GPSSpeed",
            14: "GPSTrackRef",
            15: "GPSTrack",
            16: "GPSImgDirectionRef",
            17: "GPSImgDirection",
            18: "GPSMapDatum",
            19: "GPSDestLatitudeRef",
            20: "GPSDestLatitude",
            21: "GPSDestLongitudeRef",
            22: "GPSDestLongitude",
            23: "GPSDestBearingRef",
            24: "GPSDestBearing",
            25: "GPSDestDistanceRef",
            26: "GPSDestDistance",
            27: "GPSProcessingMethod",
            28: "GPSAreaInformation",
            29: "GPSDateStamp",
            30: "GPSDifferential",
          }),
          s = (r.IFD1Tags = {
            256: "ImageWidth",
            257: "ImageHeight",
            258: "BitsPerSample",
            259: "Compression",
            262: "PhotometricInterpretation",
            273: "StripOffsets",
            274: "Orientation",
            277: "SamplesPerPixel",
            278: "RowsPerStrip",
            279: "StripByteCounts",
            282: "XResolution",
            283: "YResolution",
            284: "PlanarConfiguration",
            296: "ResolutionUnit",
            513: "JpegIFOffset",
            514: "JpegIFByteCount",
            529: "YCbCrCoefficients",
            530: "YCbCrSubSampling",
            531: "YCbCrPositioning",
            532: "ReferenceBlackWhite",
          }),
          u = (r.StringValues = {
            ExposureProgram: {
              0: "Not defined",
              1: "Manual",
              2: "Normal program",
              3: "Aperture priority",
              4: "Shutter priority",
              5: "Creative program",
              6: "Action program",
              7: "Portrait mode",
              8: "Landscape mode",
            },
            MeteringMode: {
              0: "Unknown",
              1: "Average",
              2: "CenterWeightedAverage",
              3: "Spot",
              4: "MultiSpot",
              5: "Pattern",
              6: "Partial",
              255: "Other",
            },
            LightSource: {
              0: "Unknown",
              1: "Daylight",
              2: "Fluorescent",
              3: "Tungsten (incandescent light)",
              4: "Flash",
              9: "Fine weather",
              10: "Cloudy weather",
              11: "Shade",
              12: "Daylight fluorescent (D 5700 - 7100K)",
              13: "Day white fluorescent (N 4600 - 5400K)",
              14: "Cool white fluorescent (W 3900 - 4500K)",
              15: "White fluorescent (WW 3200 - 3700K)",
              17: "Standard light A",
              18: "Standard light B",
              19: "Standard light C",
              20: "D55",
              21: "D65",
              22: "D75",
              23: "D50",
              24: "ISO studio tungsten",
              255: "Other",
            },
            Flash: {
              0: "Flash did not fire",
              1: "Flash fired",
              5: "Strobe return light not detected",
              7: "Strobe return light detected",
              9: "Flash fired, compulsory flash mode",
              13: "Flash fired, compulsory flash mode, return light not detected",
              15: "Flash fired, compulsory flash mode, return light detected",
              16: "Flash did not fire, compulsory flash mode",
              24: "Flash did not fire, auto mode",
              25: "Flash fired, auto mode",
              29: "Flash fired, auto mode, return light not detected",
              31: "Flash fired, auto mode, return light detected",
              32: "No flash function",
              65: "Flash fired, red-eye reduction mode",
              69: "Flash fired, red-eye reduction mode, return light not detected",
              71: "Flash fired, red-eye reduction mode, return light detected",
              73: "Flash fired, compulsory flash mode, red-eye reduction mode",
              77: "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",
              79: "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",
              89: "Flash fired, auto mode, red-eye reduction mode",
              93: "Flash fired, auto mode, return light not detected, red-eye reduction mode",
              95: "Flash fired, auto mode, return light detected, red-eye reduction mode",
            },
            SensingMethod: {
              1: "Not defined",
              2: "One-chip color area sensor",
              3: "Two-chip color area sensor",
              4: "Three-chip color area sensor",
              5: "Color sequential area sensor",
              7: "Trilinear sensor",
              8: "Color sequential linear sensor",
            },
            SceneCaptureType: {
              0: "Standard",
              1: "Landscape",
              2: "Portrait",
              3: "Night scene",
            },
            SceneType: { 1: "Directly photographed" },
            CustomRendered: { 0: "Normal process", 1: "Custom process" },
            WhiteBalance: {
              0: "Auto white balance",
              1: "Manual white balance",
            },
            GainControl: {
              0: "None",
              1: "Low gain up",
              2: "High gain up",
              3: "Low gain down",
              4: "High gain down",
            },
            Contrast: { 0: "Normal", 1: "Soft", 2: "Hard" },
            Saturation: {
              0: "Normal",
              1: "Low saturation",
              2: "High saturation",
            },
            Sharpness: { 0: "Normal", 1: "Soft", 2: "Hard" },
            SubjectDistanceRange: {
              0: "Unknown",
              1: "Macro",
              2: "Close view",
              3: "Distant view",
            },
            FileSource: { 3: "DSC" },
            Components: {
              0: "",
              1: "Y",
              2: "Cb",
              3: "Cr",
              4: "R",
              5: "G",
              6: "B",
            },
          });
        function c(e) {
          return !!e.exifdata;
        }
        function d(e, t) {
          ((t = t || e.match(/^data\:([^\;]+)\;base64,/im)[1] || ""),
            (e = e.replace(/^data\:([^\;]+)\;base64,/gim, "")));
          for (
            var n = atob(e),
              r = n.length,
              o = new ArrayBuffer(r),
              a = new Uint8Array(o),
              i = 0;
            i < r;
            i++
          )
            a[i] = n.charCodeAt(i);
          return o;
        }
        function m(e, t) {
          var n = new XMLHttpRequest();
          (n.open("GET", e, !0),
            (n.responseType = "blob"),
            (n.onload = function (e) {
              (this.status == 200 || this.status === 0) && t(this.response);
            }),
            n.send());
        }
        function p(e, t) {
          function n(n) {
            var o = _(n);
            e.exifdata = o || {};
            var a = f(n);
            if (((e.iptcdata = a || {}), r.isXmpEnabled)) {
              var i = L(n);
              e.xmpdata = i || {};
            }
            t && t.call(e);
          }
          if (e.src)
            if (/^data\:/i.test(e.src)) {
              var o = d(e.src);
              n(o);
            } else if (/^blob\:/i.test(e.src)) {
              var a = new FileReader();
              ((a.onload = function (e) {
                n(e.target.result);
              }),
                m(e.src, function (e) {
                  a.readAsArrayBuffer(e);
                }));
            } else {
              var i = new XMLHttpRequest();
              ((i.onload = function () {
                if (this.status == 200 || this.status === 0) n(i.response);
                else throw "Could not load image";
                i = null;
              }),
                i.open("GET", e.src, !0),
                (i.responseType = "arraybuffer"),
                i.send(null));
            }
          else if (
            self.FileReader &&
            (e instanceof self.Blob || e instanceof self.File)
          ) {
            var a = new FileReader();
            ((a.onload = function (e) {
              n(e.target.result);
            }),
              a.readAsArrayBuffer(e));
          }
        }
        function _(e) {
          var t = new DataView(e);
          if (t.getUint8(0) != 255 || t.getUint8(1) != 216) return !1;
          for (var n = 2, r = e.byteLength, o; n < r; ) {
            if (t.getUint8(n) != 255) return !1;
            if (((o = t.getUint8(n + 1)), o == 225))
              return R(t, n + 4, t.getUint16(n + 2) - 2);
            n += 2 + t.getUint16(n + 2);
          }
        }
        function f(e) {
          var t = new DataView(e);
          if (t.getUint8(0) != 255 || t.getUint8(1) != 216) return !1;
          for (
            var n = 2,
              r = e.byteLength,
              o = function (e, t) {
                return (
                  e.getUint8(t) === 56 &&
                  e.getUint8(t + 1) === 66 &&
                  e.getUint8(t + 2) === 73 &&
                  e.getUint8(t + 3) === 77 &&
                  e.getUint8(t + 4) === 4 &&
                  e.getUint8(t + 5) === 4
                );
              };
            n < r;
          ) {
            if (o(t, n)) {
              var a = t.getUint8(n + 7);
              (a % 2 !== 0 && (a += 1), a === 0 && (a = 4));
              var i = n + 8 + a,
                l = t.getUint16(n + 6 + a);
              return h(e, i, l);
            }
            n++;
          }
        }
        var g = {
          120: "caption",
          110: "credit",
          25: "keywords",
          55: "dateCreated",
          80: "byline",
          85: "bylineTitle",
          122: "captionWriter",
          105: "headline",
          116: "copyright",
          15: "category",
        };
        function h(e, t, n) {
          for (var r = new DataView(e), o = {}, a, i, l, s, u = t; u < t + n; )
            (r.getUint8(u) === 28 &&
              r.getUint8(u + 1) === 2 &&
              ((s = r.getUint8(u + 2)),
              s in g &&
                ((l = r.getInt16(u + 3)),
                (i = g[s]),
                (a = S(r, u + 5, l)),
                o.hasOwnProperty(i)
                  ? o[i] instanceof Array
                    ? o[i].push(a)
                    : (o[i] = [o[i], a])
                  : (o[i] = a))),
              u++);
          return o;
        }
        function y(e, n, r, o, a) {
          var i = e.getUint16(r, !a),
            l = {},
            s,
            u,
            c;
          for (c = 0; c < i; c++)
            ((s = r + c * 12 + 2),
              (u = o[e.getUint16(s, !a)]),
              !u && t && "" + e.getUint16(s, !a),
              (l[u] = C(e, s, n, r, a)));
          return l;
        }
        function C(e, t, n, r, o) {
          var a = e.getUint16(t + 2, !o),
            i = e.getUint32(t + 4, !o),
            l = e.getUint32(t + 8, !o) + n,
            s,
            u,
            c,
            d,
            m,
            p;
          switch (a) {
            case 1:
            case 7:
              if (i == 1) return e.getUint8(t + 8, !o);
              for (s = i > 4 ? l : t + 8, u = [], d = 0; d < i; d++)
                u[d] = e.getUint8(s + d);
              return u;
            case 2:
              return ((s = i > 4 ? l : t + 8), S(e, s, i - 1));
            case 3:
              if (i == 1) return e.getUint16(t + 8, !o);
              for (s = i > 2 ? l : t + 8, u = [], d = 0; d < i; d++)
                u[d] = e.getUint16(s + 2 * d, !o);
              return u;
            case 4:
              if (i == 1) return e.getUint32(t + 8, !o);
              for (u = [], d = 0; d < i; d++) u[d] = e.getUint32(l + 4 * d, !o);
              return u;
            case 5:
              if (i == 1)
                return (
                  (m = e.getUint32(l, !o)),
                  (p = e.getUint32(l + 4, !o)),
                  (c = new Number(m / p)),
                  (c.numerator = m),
                  (c.denominator = p),
                  c
                );
              for (u = [], d = 0; d < i; d++)
                ((m = e.getUint32(l + 8 * d, !o)),
                  (p = e.getUint32(l + 4 + 8 * d, !o)),
                  (u[d] = new Number(m / p)),
                  (u[d].numerator = m),
                  (u[d].denominator = p));
              return u;
            case 9:
              if (i == 1) return e.getInt32(t + 8, !o);
              for (u = [], d = 0; d < i; d++) u[d] = e.getInt32(l + 4 * d, !o);
              return u;
            case 10:
              if (i == 1) return e.getInt32(l, !o) / e.getInt32(l + 4, !o);
              for (u = [], d = 0; d < i; d++)
                u[d] =
                  e.getInt32(l + 8 * d, !o) / e.getInt32(l + 4 + 8 * d, !o);
              return u;
          }
        }
        function b(e, t, n) {
          var r = e.getUint16(t, !n);
          return e.getUint32(t + 2 + r * 12, !n);
        }
        function v(e, t, n, r) {
          var o = b(e, t + n, r);
          if (o) {
            if (o > e.byteLength) return {};
          } else return {};
          var a = y(e, t, t + o, s, r);
          if (a.Compression)
            switch (a.Compression) {
              case 6:
                if (a.JpegIFOffset && a.JpegIFByteCount) {
                  var i = t + a.JpegIFOffset,
                    l = a.JpegIFByteCount;
                  a.blob = new Blob([new Uint8Array(e.buffer, i, l)], {
                    type: "image/jpeg",
                  });
                }
                break;
              case 1:
                break;
              default:
                a.Compression;
            }
          else a.PhotometricInterpretation == 2;
          return a;
        }
        function S(e, t, n) {
          for (var r = "", o = t; o < t + n; o++)
            r += String.fromCharCode(e.getUint8(o));
          return r;
        }
        function R(e, t) {
          if (S(e, t, 4) != "Exif") return !1;
          var n,
            r,
            l,
            s,
            c,
            d = t + 6;
          if (e.getUint16(d) == 18761) n = !1;
          else if (e.getUint16(d) == 19789) n = !0;
          else return !1;
          if (e.getUint16(d + 2, !n) != 42) return !1;
          var m = e.getUint32(d + 4, !n);
          if (m < 8) return !1;
          if (((r = y(e, d, d + m, a, n)), r.ExifIFDPointer)) {
            s = y(e, d, d + r.ExifIFDPointer, o, n);
            for (l in s) {
              switch (l) {
                case "LightSource":
                case "Flash":
                case "MeteringMode":
                case "ExposureProgram":
                case "SensingMethod":
                case "SceneCaptureType":
                case "SceneType":
                case "CustomRendered":
                case "WhiteBalance":
                case "GainControl":
                case "Contrast":
                case "Saturation":
                case "Sharpness":
                case "SubjectDistanceRange":
                case "FileSource":
                  s[l] = u[l][s[l]];
                  break;
                case "ExifVersion":
                case "FlashpixVersion":
                  s[l] = String.fromCharCode(
                    s[l][0],
                    s[l][1],
                    s[l][2],
                    s[l][3],
                  );
                  break;
                case "ComponentsConfiguration":
                  s[l] =
                    u.Components[s[l][0]] +
                    u.Components[s[l][1]] +
                    u.Components[s[l][2]] +
                    u.Components[s[l][3]];
                  break;
              }
              r[l] = s[l];
            }
          }
          if (r.GPSInfoIFDPointer) {
            c = y(e, d, d + r.GPSInfoIFDPointer, i, n);
            for (l in c) {
              switch (l) {
                case "GPSVersionID":
                  c[l] =
                    c[l][0] + "." + c[l][1] + "." + c[l][2] + "." + c[l][3];
                  break;
              }
              r[l] = c[l];
            }
          }
          return ((r.thumbnail = v(e, d, m, n)), r);
        }
        function L(e) {
          if ("DOMParser" in self) {
            var t = new DataView(e);
            if (t.getUint8(0) != 255 || t.getUint8(1) != 216) return !1;
            for (var n = 2, r = e.byteLength, o = new DOMParser(); n < r - 4; )
              if (S(t, n, 4) == "http") {
                var a = n - 1,
                  i = t.getUint16(n - 2) - 1,
                  l = S(t, a, i),
                  s = l.indexOf("xmpmeta>") + 8;
                l = l.substring(l.indexOf("<x:xmpmeta"), s);
                var u = l.indexOf("x:xmpmeta") + 10;
                l =
                  l.slice(0, u) +
                  'xmlns:Iptc4xmpCore="http://iptc.org/std/Iptc4xmpCore/1.0/xmlns/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:tiff="http://ns.adobe.com/tiff/1.0/" xmlns:plus="http://schemas.android.com/apk/lib/com.google.android.gms.plus" xmlns:ext="http://www.gettyimages.com/xsltExtension/1.0" xmlns:exif="http://ns.adobe.com/exif/1.0/" xmlns:stEvt="http://ns.adobe.com/xap/1.0/sType/ResourceEvent#" xmlns:stRef="http://ns.adobe.com/xap/1.0/sType/ResourceRef#" xmlns:crs="http://ns.adobe.com/camera-raw-settings/1.0/" xmlns:xapGImg="http://ns.adobe.com/xap/1.0/g/img/" xmlns:Iptc4xmpExt="http://iptc.org/std/Iptc4xmpExt/2008-02-29/" ' +
                  l.slice(u);
                var c = o.parseFromString(l, "text/xml");
                return k(c);
              } else n++;
          }
        }
        function E(e) {
          var t = {};
          if (e.nodeType == 1) {
            if (e.attributes.length > 0) {
              t["@attributes"] = {};
              for (var n = 0; n < e.attributes.length; n++) {
                var r = e.attributes.item(n);
                t["@attributes"][r.nodeName] = r.nodeValue;
              }
            }
          } else if (e.nodeType == 3) return e.nodeValue;
          if (e.hasChildNodes())
            for (var o = 0; o < e.childNodes.length; o++) {
              var a = e.childNodes.item(o),
                i = a.nodeName;
              if (t[i] == null) t[i] = E(a);
              else {
                if (t[i].push == null) {
                  var l = t[i];
                  ((t[i] = []), t[i].push(l));
                }
                t[i].push(E(a));
              }
            }
          return t;
        }
        function k(e) {
          try {
            var t = {};
            if (e.children.length > 0)
              for (var n = 0; n < e.children.length; n++) {
                var r = e.children.item(n),
                  o = r.attributes;
                for (var a in o) {
                  var i = o[a],
                    l = i.nodeName,
                    s = i.nodeValue;
                  l !== void 0 && (t[l] = s);
                }
                var u = r.nodeName;
                if (typeof t[u] == "undefined") t[u] = E(r);
                else {
                  if (typeof t[u].push == "undefined") {
                    var c = t[u];
                    ((t[u] = []), t[u].push(c));
                  }
                  t[u].push(E(r));
                }
              }
            else t = e.textContent;
            return t;
          } catch (e) {
            e.message;
          }
        }
        ((r.enableXmp = function () {
          r.isXmpEnabled = !0;
        }),
          (r.disableXmp = function () {
            r.isXmpEnabled = !1;
          }),
          (r.getData = function (e, t) {
            return ((self.Image && e instanceof self.Image) ||
              (self.HTMLImageElement && e instanceof self.HTMLImageElement)) &&
              !e.complete
              ? !1
              : (c(e) ? t && t.call(e) : p(e, t), !0);
          }),
          (r.getTag = function (e, t) {
            if (c(e)) return e.exifdata[t];
          }),
          (r.getIptcTag = function (e, t) {
            if (c(e)) return e.iptcdata[t];
          }),
          (r.getAllTags = function (e) {
            if (!c(e)) return {};
            var t,
              n = e.exifdata,
              r = {};
            for (t in n) n.hasOwnProperty(t) && (r[t] = n[t]);
            return r;
          }),
          (r.getAllIptcTags = function (e) {
            if (!c(e)) return {};
            var t,
              n = e.iptcdata,
              r = {};
            for (t in n) n.hasOwnProperty(t) && (r[t] = n[t]);
            return r;
          }),
          (r.pretty = function (e) {
            if (!c(e)) return "";
            var t,
              n = e.exifdata,
              r = "";
            for (t in n)
              n.hasOwnProperty(t) &&
                (typeof n[t] == "object"
                  ? n[t] instanceof Number
                    ? (r +=
                        t +
                        " : " +
                        n[t] +
                        " [" +
                        n[t].numerator +
                        "/" +
                        n[t].denominator +
                        "]\r\n")
                    : (r += t + " : [" + n[t].length + " values]\r\n")
                  : (r += t + " : " + n[t] + "\r\n"));
            return r;
          }),
          (r.readFromBinaryFile = function (e) {
            return _(e);
          }));
      }).call(this);
    }
    var u = !1;
    function c() {
      return (u || ((u = !0), s()), l.exports);
    }
    function d(e) {
      switch (e) {
        case void 0:
          return c();
      }
    }
    a.exports = d;
  },
  null,
);
