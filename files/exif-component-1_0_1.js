__d(
  "exif-component-1.0.1",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {},
      l = { exports: e };
    function s() {
      (function () {
        (typeof e != "undefined" && e !== null ? e : this).ExifReader =
          (function () {
            ((e.prototype._MIN_DATA_BUFFER_LENGTH = 2),
              (e.prototype._JPEG_ID_SIZE = 2),
              (e.prototype._JPEG_ID = 65496),
              (e.prototype._APP_MARKER_SIZE = 2),
              (e.prototype._APP0_MARKER = 65504),
              (e.prototype._APP1_MARKER = 65505),
              (e.prototype._APP15_MARKER = 65519),
              (e.prototype._APP_ID_OFFSET = 4),
              (e.prototype._BYTES_Exif = 1165519206),
              (e.prototype._TIFF_HEADER_OFFSET = 10),
              (e.prototype._BYTE_ORDER_BIG_ENDIAN = 18761),
              (e.prototype._BYTE_ORDER_LITTLE_ENDIAN = 19789));
            function e() {
              var e = this;
              ((this._getTagValueAt = {
                1: function (t) {
                  return e._getByteAt(t);
                },
                2: function (t) {
                  return e._getAsciiAt(t);
                },
                3: function (t) {
                  return e._getShortAt(t);
                },
                4: function (t) {
                  return e._getLongAt(t);
                },
                5: function (t) {
                  return e._getRationalAt(t);
                },
                7: function (t) {
                  return e._getUndefinedAt(t);
                },
                9: function (t) {
                  return e._getSlongAt(t);
                },
                10: function (t) {
                  return e._getSrationalAt(t);
                },
              }),
                (this._tiffHeaderOffset = 0));
            }
            return (
              (e.prototype.load = function (e) {
                return this.loadView(new DataView(e));
              }),
              (e.prototype.loadView = function (e) {
                return (
                  (this._dataView = e),
                  (this._tags = {}),
                  this._checkImageHeader(),
                  this._readTags()
                );
              }),
              (e.prototype._checkImageHeader = function () {
                var e;
                if (
                  ((e = this._dataView),
                  e.byteLength < this._MIN_DATA_BUFFER_LENGTH ||
                    e.getUint16(0, !1) !== this._JPEG_ID)
                )
                  throw new Error("Invalid image format");
                if ((this._parseAppMarkers(e), !this._hasExifData()))
                  throw new Error("No Exif data");
              }),
              (e.prototype._parseAppMarkers = function (e) {
                var t, n, r;
                for (
                  t = this._JPEG_ID_SIZE, r = [];
                  !(e.byteLength < t + this._APP_ID_OFFSET + 5);
                ) {
                  if (this._isApp1ExifMarker(e, t))
                    ((n = e.getUint16(t + this._APP_MARKER_SIZE, !1)),
                      (this._tiffHeaderOffset = t + this._TIFF_HEADER_OFFSET));
                  else if (this._isAppMarker(e, t))
                    n = e.getUint16(t + this._APP_MARKER_SIZE, !1);
                  else break;
                  r.push((t += this._APP_MARKER_SIZE + n));
                }
                return r;
              }),
              (e.prototype._isApp1ExifMarker = function (e, t) {
                return (
                  e.getUint16(t, !1) === this._APP1_MARKER &&
                  e.getUint32(t + this._APP_ID_OFFSET, !1) ===
                    this._BYTES_Exif &&
                  e.getUint8(t + this._APP_ID_OFFSET + 4, !1) === 0
                );
              }),
              (e.prototype._isAppMarker = function (e, t) {
                var n;
                return (
                  (n = e.getUint16(t, !1)),
                  n >= this._APP0_MARKER && n <= this._APP15_MARKER
                );
              }),
              (e.prototype._hasExifData = function () {
                return this._tiffHeaderOffset !== 0;
              }),
              (e.prototype._readTags = function () {
                return (
                  this._setByteOrder(),
                  this._read0thIfd(),
                  this._readExifIfd(),
                  this._readGpsIfd(),
                  this._readInteroperabilityIfd()
                );
              }),
              (e.prototype._setByteOrder = function () {
                if (
                  this._dataView.getUint16(this._tiffHeaderOffset) ===
                  this._BYTE_ORDER_BIG_ENDIAN
                )
                  return (this._littleEndian = !0);
                if (
                  this._dataView.getUint16(this._tiffHeaderOffset) ===
                  this._BYTE_ORDER_LITTLE_ENDIAN
                )
                  return (this._littleEndian = !1);
                throw new Error("Illegal byte order value. Faulty image.");
              }),
              (e.prototype._read0thIfd = function () {
                var e;
                return ((e = this._getIfdOffset()), this._readIfd("0th", e));
              }),
              (e.prototype._getIfdOffset = function () {
                return (
                  this._tiffHeaderOffset +
                  this._getLongAt(this._tiffHeaderOffset + 4)
                );
              }),
              (e.prototype._readExifIfd = function () {
                var e;
                if (this._tags["Exif IFD Pointer"] != null)
                  return (
                    (e =
                      this._tiffHeaderOffset +
                      this._tags["Exif IFD Pointer"].value),
                    this._readIfd("exif", e)
                  );
              }),
              (e.prototype._readGpsIfd = function () {
                var e;
                if (this._tags["GPS Info IFD Pointer"] != null)
                  return (
                    (e =
                      this._tiffHeaderOffset +
                      this._tags["GPS Info IFD Pointer"].value),
                    this._readIfd("gps", e)
                  );
              }),
              (e.prototype._readInteroperabilityIfd = function () {
                var e;
                if (this._tags["Interoperability IFD Pointer"] != null)
                  return (
                    (e =
                      this._tiffHeaderOffset +
                      this._tags["Interoperability IFD Pointer"].value),
                    this._readIfd("interoperability", e)
                  );
              }),
              (e.prototype._readIfd = function (e, t) {
                var n, r, o, a;
                for (
                  n = this._getShortAt(t), t += 2, a = [], o = 0;
                  0 <= n ? o < n : o > n;
                  0 <= n ? ++o : --o
                )
                  ((r = this._readTag(e, t)),
                    (this._tags[r.name] = {
                      value: r.value,
                      description: r.description,
                    }),
                    a.push((t += 12)));
                return a;
              }),
              (e.prototype._readTag = function (e, t) {
                var n, r, o, a, i, l, s;
                return (
                  (n = this._getShortAt(t)),
                  (i = this._getShortAt(t + 2)),
                  (r = this._getLongAt(t + 4)),
                  this._typeSizes[i] * r <= 4
                    ? (l = this._getTagValue(t + 8, i, r))
                    : ((s = this._getLongAt(t + 8)),
                      (l = this._getTagValue(
                        this._tiffHeaderOffset + s,
                        i,
                        r,
                      ))),
                  i === this._tagTypes.ASCII &&
                    (l = this._splitNullSeparatedAsciiString(l)),
                  this._tagNames[e][n] != null
                    ? (this._tagNames[e][n].name != null &&
                      this._tagNames[e][n].description != null
                        ? ((a = this._tagNames[e][n].name),
                          (o = this._tagNames[e][n].description(l)))
                        : ((a = this._tagNames[e][n]),
                          l instanceof Array ? (o = l.join(", ")) : (o = l)),
                      { name: a, value: l, description: o })
                    : { name: "undefined-" + n, value: l, description: l }
                );
              }),
              (e.prototype._getTagValue = function (e, t, n) {
                var r, o;
                return (
                  (o = function () {
                    var o, a;
                    for (
                      a = [], o = 0;
                      0 <= n ? o < n : o > n;
                      0 <= n ? ++o : --o
                    )
                      ((r = this._getTagValueAt[t](e)),
                        (e += this._typeSizes[t]),
                        a.push(r));
                    return a;
                  }.call(this)),
                  o.length === 1
                    ? (o = o[0])
                    : t === this._tagTypes.ASCII &&
                      (o = this._getAsciiValue(o)),
                  o
                );
              }),
              (e.prototype._getAsciiValue = function (e) {
                var t;
                return (function () {
                  var n, r, o;
                  for (o = [], n = 0, r = e.length; n < r; n++)
                    ((t = e[n]), o.push(String.fromCharCode(t)));
                  return o;
                })();
              }),
              (e.prototype._getByteAt = function (e) {
                return this._dataView.getUint8(e);
              }),
              (e.prototype._getAsciiAt = function (e) {
                return this._dataView.getUint8(e);
              }),
              (e.prototype._getShortAt = function (e) {
                return this._dataView.getUint16(e, this._littleEndian);
              }),
              (e.prototype._getLongAt = function (e) {
                return this._dataView.getUint32(e, this._littleEndian);
              }),
              (e.prototype._getRationalAt = function (e) {
                return this._getLongAt(e) / this._getLongAt(e + 4);
              }),
              (e.prototype._getUndefinedAt = function (e) {
                return this._getByteAt(e);
              }),
              (e.prototype._getSlongAt = function (e) {
                return this._dataView.getInt32(e, this._littleEndian);
              }),
              (e.prototype._getSrationalAt = function (e) {
                return this._getSlongAt(e) / this._getSlongAt(e + 4);
              }),
              (e.prototype._splitNullSeparatedAsciiString = function (e) {
                var t, n, r, o, a;
                for (r = [], n = 0, o = 0, a = e.length; o < a; o++) {
                  if (((t = e[o]), t === "\0")) {
                    n++;
                    continue;
                  }
                  (r[n] == null && (r[n] = ""), (r[n] += t));
                }
                return r;
              }),
              (e.prototype._typeSizes = {
                1: 1,
                2: 1,
                3: 2,
                4: 4,
                5: 8,
                7: 1,
                9: 4,
                10: 8,
              }),
              (e.prototype._tagTypes = {
                BYTE: 1,
                ASCII: 2,
                SHORT: 3,
                LONG: 4,
                RATIONAL: 5,
                UNDEFINED: 7,
                SLONG: 9,
                SRATIONAL: 10,
              }),
              (e.prototype._tagNames = {
                "0th": {
                  256: "ImageWidth",
                  257: "ImageLength",
                  258: "BitsPerSample",
                  259: "Compression",
                  262: "PhotometricInterpretation",
                  270: "ImageDescription",
                  271: "Make",
                  272: "Model",
                  273: "StripOffsets",
                  274: {
                    name: "Orientation",
                    description: function (e) {
                      switch (e) {
                        case 1:
                          return "top-left";
                        case 2:
                          return "top-right";
                        case 3:
                          return "bottom-right";
                        case 4:
                          return "bottom-left";
                        case 5:
                          return "left-top";
                        case 6:
                          return "right-top";
                        case 7:
                          return "right-bottom";
                        case 8:
                          return "left-bottom";
                        default:
                          return "Undefined";
                      }
                    },
                  },
                  277: "SamplesPerPixel",
                  278: "RowsPerStrip",
                  279: "StripByteCounts",
                  282: "XResolution",
                  283: "YResolution",
                  284: "PlanarConfiguration",
                  296: {
                    name: "ResolutionUnit",
                    description: function (e) {
                      switch (e) {
                        case 2:
                          return "inches";
                        case 3:
                          return "centimeters";
                        default:
                          return "Unknown";
                      }
                    },
                  },
                  301: "TransferFunction",
                  305: "Software",
                  306: "DateTime",
                  315: "Artist",
                  318: "WhitePoint",
                  319: "PrimaryChromaticities",
                  513: "JPEGInterchangeFormat",
                  514: "JPEGInterchangeFormatLength",
                  529: "YCbCrCoefficients",
                  530: "YCbCrSubSampling",
                  531: {
                    name: "YCbCrPositioning",
                    description: function (e) {
                      switch (e) {
                        case 1:
                          return "centered";
                        case 2:
                          return "co-sited";
                        default:
                          return "undefied " + e;
                      }
                    },
                  },
                  532: "ReferenceBlackWhite",
                  33432: {
                    name: "Copyright",
                    description: function (e) {
                      return e.join("; ");
                    },
                  },
                  34665: "Exif IFD Pointer",
                  34853: "GPS Info IFD Pointer",
                },
                exif: {
                  33434: "ExposureTime",
                  33437: "FNumber",
                  34850: {
                    name: "ExposureProgram",
                    description: function (e) {
                      switch (e) {
                        case 0:
                          return "Undefined";
                        case 1:
                          return "Manual";
                        case 2:
                          return "Normal program";
                        case 3:
                          return "Aperture priority";
                        case 4:
                          return "Shutter priority";
                        case 5:
                          return "Creative program";
                        case 6:
                          return "Action program";
                        case 7:
                          return "Portrait mode";
                        case 8:
                          return "Landscape mode";
                        default:
                          return "Unknown";
                      }
                    },
                  },
                  34852: "SpectralSensitivity",
                  34855: "ISOSpeedRatings",
                  34856: {
                    name: "OECF",
                    description: function (e) {
                      return "[Raw OECF table data]";
                    },
                  },
                  36864: {
                    name: "ExifVersion",
                    description: function (e) {
                      var t, n, r, o;
                      for (n = "", r = 0, o = e.length; r < o; r++)
                        ((t = e[r]), (n += String.fromCharCode(t)));
                      return n;
                    },
                  },
                  36867: "DateTimeOriginal",
                  36868: "DateTimeDigitized",
                  37121: {
                    name: "ComponentsConfiguration",
                    description: function (e) {
                      var t, n, r, o;
                      for (n = "", r = 0, o = e.length; r < o; r++)
                        switch (((t = e[r]), t)) {
                          case 49:
                            n += "Y";
                            break;
                          case 50:
                            n += "Cb";
                            break;
                          case 51:
                            n += "Cr";
                            break;
                          case 52:
                            n += "R";
                            break;
                          case 53:
                            n += "G";
                            break;
                          case 54:
                            n += "B";
                        }
                      return n;
                    },
                  },
                  37122: "CompressedBitsPerPixel",
                  37377: "ShutterSpeedValue",
                  37378: "ApertureValue",
                  37379: "BrightnessValue",
                  37380: "ExposureBiasValue",
                  37381: "MaxApertureValue",
                  37382: "SubjectDistance",
                  37383: {
                    name: "MeteringMode",
                    description: function (e) {
                      switch (e) {
                        case 1:
                          return "Average";
                        case 2:
                          return "CenterWeightedAverage";
                        case 3:
                          return "Spot";
                        case 4:
                          return "MultiSpot";
                        case 5:
                          return "Pattern";
                        case 6:
                          return "Partial";
                        case 255:
                          return "Other";
                        default:
                          return "Unknown";
                      }
                    },
                  },
                  37384: {
                    name: "LightSource",
                    description: function (e) {
                      switch (e) {
                        case 1:
                          return "Daylight";
                        case 2:
                          return "Fluorescent";
                        case 3:
                          return "Tungsten (incandescent light)";
                        case 4:
                          return "Flash";
                        case 9:
                          return "Fine weather";
                        case 10:
                          return "Cloudy weather";
                        case 11:
                          return "Shade";
                        case 12:
                          return "Daylight fluorescent (D 5700 \u2013 7100K)";
                        case 13:
                          return "Day white fluorescent (N 4600 \u2013 5400K)";
                        case 14:
                          return "Cool white fluorescent (W 3900 \u2013 4500K)";
                        case 15:
                          return "White fluorescent (WW 3200 \u2013 3700K)";
                        case 17:
                          return "Standard light A";
                        case 18:
                          return "Standard light B";
                        case 19:
                          return "Standard light C";
                        case 20:
                          return "D55";
                        case 21:
                          return "D65";
                        case 22:
                          return "D75";
                        case 23:
                          return "D50";
                        case 24:
                          return "ISO studio tungsten";
                        case 255:
                          return "Other light source";
                        default:
                          return "Unknown";
                      }
                    },
                  },
                  37385: {
                    name: "Flash",
                    description: function (e) {
                      switch (e) {
                        case 0:
                          return "Flash did not fire";
                        case 1:
                          return "Flash fired";
                        case 5:
                          return "Strobe return light not detected";
                        case 7:
                          return "Strobe return light detected";
                        case 9:
                          return "Flash fired, compulsory flash mode";
                        case 13:
                          return "Flash fired, compulsory flash mode, return light not detected";
                        case 15:
                          return "Flash fired, compulsory flash mode, return light detected";
                        case 16:
                          return "Flash did not fire, compulsory flash mode";
                        case 24:
                          return "Flash did not fire, auto mode";
                        case 25:
                          return "Flash fired, auto mode";
                        case 29:
                          return "Flash fired, auto mode, return light not detected";
                        case 31:
                          return "Flash fired, auto mode, return light detected";
                        case 32:
                          return "No flash function";
                        case 65:
                          return "Flash fired, red-eye reduction mode";
                        case 69:
                          return "Flash fired, red-eye reduction mode, return light not detected";
                        case 71:
                          return "Flash fired, red-eye reduction mode, return light detected";
                        case 73:
                          return "Flash fired, compulsory flash mode, red-eye reduction mode";
                        case 77:
                          return "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected";
                        case 79:
                          return "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected";
                        case 89:
                          return "Flash fired, auto mode, red-eye reduction mode";
                        case 93:
                          return "Flash fired, auto mode, return light not detected, red-eye reduction mode";
                        case 95:
                          return "Flash fired, auto mode, return light detected, red-eye reduction mode";
                        default:
                          return "Unknown";
                      }
                    },
                  },
                  37386: "FocalLength",
                  37396: {
                    name: "SubjectArea",
                    description: function (e) {
                      switch (e.length) {
                        case 2:
                          return "Location; X: " + e[0] + ", Y: " + e[1];
                        case 3:
                          return (
                            "Circle; X: " +
                            e[0] +
                            ", Y: " +
                            e[1] +
                            ", diameter: " +
                            e[2]
                          );
                        case 4:
                          return (
                            "Rectangle; X: " +
                            e[0] +
                            ", Y: " +
                            e[1] +
                            ", width: " +
                            e[2] +
                            ", height: " +
                            e[3]
                          );
                        default:
                          return "Unknown";
                      }
                    },
                  },
                  37500: {
                    name: "MakerNote",
                    description: function (e) {
                      return "[Raw maker note data]";
                    },
                  },
                  37510: {
                    name: "UserComment",
                    description: function (e) {
                      switch (
                        e
                          .slice(0, 8)
                          .map(function (e) {
                            return String.fromCharCode(e);
                          })
                          .join("")
                      ) {
                        case "ASCII\0\0\0":
                          return e
                            .slice(8, e.length)
                            .map(function (e) {
                              return String.fromCharCode(e);
                            })
                            .join("");
                        case "JIS\0\0\0\0\0":
                          return "[JIS encoded text]";
                        case "UNICODE\0":
                          return "[Unicode encoded text]";
                        case "\0\0\0\0\0\0\0\0":
                          return "[Undefined encoding]";
                      }
                    },
                  },
                  37520: "SubSecTime",
                  37521: "SubSecTimeOriginal",
                  37522: "SubSecTimeDigitized",
                  40960: {
                    name: "FlashpixVersion",
                    description: function (e) {
                      var t, n, r, o;
                      for (n = "", r = 0, o = e.length; r < o; r++)
                        ((t = e[r]), (n += String.fromCharCode(t)));
                      return n;
                    },
                  },
                  40961: {
                    name: "ColorSpace",
                    description: function (e) {
                      switch (e) {
                        case 1:
                          return "sRGB";
                        case 65535:
                          return "Uncalibrated";
                        default:
                          return "Unknown";
                      }
                    },
                  },
                  40962: "PixelXDimension",
                  40963: "PixelYDimension",
                  40964: "RelatedSoundFile",
                  40965: "Interoperability IFD Pointer",
                  41483: "FlashEnergy",
                  41484: {
                    name: "SpatialFrequencyResponse",
                    description: function (e) {
                      return "[Raw SFR table data]";
                    },
                  },
                  41486: "FocalPlaneXResolution",
                  41487: "FocalPlaneYResolution",
                  41488: {
                    name: "FocalPlaneResolutionUnit",
                    description: function (e) {
                      switch (e) {
                        case 2:
                          return "inches";
                        case 3:
                          return "centimeters";
                        default:
                          return "Unknown";
                      }
                    },
                  },
                  41492: {
                    name: "SubjectLocation",
                    description: function (e) {
                      return "X: " + e[0] + ", Y: " + e[1];
                    },
                  },
                  41493: "ExposureIndex",
                  41495: {
                    name: "SensingMethod",
                    description: function (e) {
                      switch (e) {
                        case 1:
                          return "Undefined";
                        case 2:
                          return "One-chip color area sensor";
                        case 3:
                          return "Two-chip color area sensor";
                        case 4:
                          return "Three-chip color area sensor";
                        case 5:
                          return "Color sequential area sensor";
                        case 7:
                          return "Trilinear sensor";
                        case 8:
                          return "Color sequential linear sensor";
                        default:
                          return "Unknown";
                      }
                    },
                  },
                  41728: {
                    name: "FileSource",
                    description: function (e) {
                      switch (e) {
                        case 3:
                          return "DSC";
                        default:
                          return "Unknown";
                      }
                    },
                  },
                  41729: {
                    name: "SceneType",
                    description: function (e) {
                      switch (e) {
                        case 1:
                          return "A directly photographed image";
                        default:
                          return "Unknown";
                      }
                    },
                  },
                  41730: {
                    name: "CFAPattern",
                    description: function (e) {
                      return "[Raw CFA pattern table data]";
                    },
                  },
                  41985: {
                    name: "CustomRendered",
                    description: function (e) {
                      switch (e) {
                        case 0:
                          return "Normal process";
                        case 1:
                          return "Custom process";
                        default:
                          return "Unknown";
                      }
                    },
                  },
                  41986: {
                    name: "ExposureMode",
                    description: function (e) {
                      switch (e) {
                        case 0:
                          return "Auto exposure";
                        case 1:
                          return "Manual exposure";
                        case 2:
                          return "Auto bracket";
                        default:
                          return "Unknown";
                      }
                    },
                  },
                  41987: {
                    name: "WhiteBalance",
                    description: function (e) {
                      switch (e) {
                        case 0:
                          return "Auto white balance";
                        case 1:
                          return "Manual white balance";
                        default:
                          return "Unknown";
                      }
                    },
                  },
                  41988: {
                    name: "DigitalZoomRatio",
                    description: function (e) {
                      switch (e) {
                        case 0:
                          return "Digital zoom was not used";
                        default:
                          return e;
                      }
                    },
                  },
                  41989: {
                    name: "FocalLengthIn35mmFilm",
                    description: function (e) {
                      switch (e) {
                        case 0:
                          return "Unknown";
                        default:
                          return e;
                      }
                    },
                  },
                  41990: {
                    name: "SceneCaptureType",
                    description: function (e) {
                      switch (e) {
                        case 0:
                          return "Standard";
                        case 1:
                          return "Landscape";
                        case 2:
                          return "Portrait";
                        case 3:
                          return "Night scene";
                        default:
                          return "Unknown";
                      }
                    },
                  },
                  41991: {
                    name: "GainControl",
                    description: function (e) {
                      switch (e) {
                        case 0:
                          return "None";
                        case 1:
                          return "Low gain up";
                        case 2:
                          return "High gain up";
                        case 3:
                          return "Low gain down";
                        case 4:
                          return "High gain down";
                        default:
                          return "Unknown";
                      }
                    },
                  },
                  41992: {
                    name: "Contrast",
                    description: function (e) {
                      switch (e) {
                        case 0:
                          return "Normal";
                        case 1:
                          return "Soft";
                        case 2:
                          return "Hard";
                        default:
                          return "Unknown";
                      }
                    },
                  },
                  41993: {
                    name: "Saturation",
                    description: function (e) {
                      switch (e) {
                        case 0:
                          return "Normal";
                        case 1:
                          return "Low saturation";
                        case 2:
                          return "High saturation";
                        default:
                          return "Unknown";
                      }
                    },
                  },
                  41994: {
                    name: "Sharpness",
                    description: function (e) {
                      switch (e) {
                        case 0:
                          return "Normal";
                        case 1:
                          return "Soft";
                        case 2:
                          return "Hard";
                        default:
                          return "Unknown";
                      }
                    },
                  },
                  41995: {
                    name: "DeviceSettingDescription",
                    description: function (e) {
                      return "[Raw device settings table data]";
                    },
                  },
                  41996: {
                    name: "SubjectDistanceRange",
                    description: function (e) {
                      switch (e) {
                        case 1:
                          return "Macro";
                        case 2:
                          return "Close view";
                        case 3:
                          return "Distant view";
                        default:
                          return "Unknown";
                      }
                    },
                  },
                  42016: "ImageUniqueID",
                },
                gps: {
                  0: {
                    name: "GPSVersionID",
                    description: function (e) {
                      var t, n;
                      return e[0] === (t = e[1]) &&
                        t === 2 &&
                        e[2] === (n = e[3]) &&
                        n === 0
                        ? "Version 2.2"
                        : "Unknown";
                    },
                  },
                  1: {
                    name: "GPSLatitudeRef",
                    description: function (e) {
                      switch (e.join("")) {
                        case "N":
                          return "North latitude";
                        case "S":
                          return "South latitude";
                        default:
                          return "Unknown";
                      }
                    },
                  },
                  2: {
                    name: "GPSLatitude",
                    description: function (e) {
                      return e[0] + e[1] / 60 + e[2] / 3600;
                    },
                  },
                  3: {
                    name: "GPSLongitudeRef",
                    description: function (e) {
                      switch (e.join("")) {
                        case "E":
                          return "East longitude";
                        case "W":
                          return "West longitude";
                        default:
                          return "Unknown";
                      }
                    },
                  },
                  4: {
                    name: "GPSLongitude",
                    description: function (e) {
                      return e[0] + e[1] / 60 + e[2] / 3600;
                    },
                  },
                  5: {
                    name: "GPSAltitudeRef",
                    description: function (e) {
                      switch (e) {
                        case 0:
                          return "Sea level";
                        case 1:
                          return "Sea level reference (negative value)";
                        default:
                          return "Unknown";
                      }
                    },
                  },
                  6: {
                    name: "GPSAltitude",
                    description: function (e) {
                      return e + " m";
                    },
                  },
                  7: {
                    name: "GPSTimeStamp",
                    description: function (e) {
                      var t;
                      return (
                        (t = function (e) {
                          return (
                            (function () {
                              var t, n, r;
                              for (
                                r = [],
                                  t = 0,
                                  n = 2 - ("" + Math.floor(e)).length;
                                0 <= n ? t < n : t > n;
                                0 <= n ? ++t : --t
                              )
                                r.push("0");
                              return r;
                            })() + e
                          );
                        }),
                        e.map(t).join(":")
                      );
                    },
                  },
                  8: "GPSSatellites",
                  9: {
                    name: "GPSStatus",
                    description: function (e) {
                      switch (e.join("")) {
                        case "A":
                          return "Measurement in progress";
                        case "V":
                          return "Measurement Interoperability";
                        default:
                          return "Unknown";
                      }
                    },
                  },
                  10: {
                    name: "GPSMeasureMode",
                    description: function (e) {
                      switch (e.join("")) {
                        case "2":
                          return "2-dimensional measurement";
                        case "3":
                          return "3-dimensional measurement";
                        default:
                          return "Unknown";
                      }
                    },
                  },
                  11: "GPSDOP",
                  12: {
                    name: "GPSSpeedRef",
                    description: function (e) {
                      switch (e.join("")) {
                        case "K":
                          return "Kilometers per hour";
                        case "M":
                          return "Miles per hour";
                        case "N":
                          return "Knots";
                        default:
                          return "Unknown";
                      }
                    },
                  },
                  13: "GPSSpeed",
                  14: {
                    name: "GPSTrackRef",
                    description: function (e) {
                      switch (e.join("")) {
                        case "T":
                          return "True direction";
                        case "M":
                          return "Magnetic direction";
                        default:
                          return "Unknown";
                      }
                    },
                  },
                  15: "GPSTrack",
                  16: {
                    name: "GPSImgDirectionRef",
                    description: function (e) {
                      switch (e.join("")) {
                        case "T":
                          return "True direction";
                        case "M":
                          return "Magnetic direction";
                        default:
                          return "Unknown";
                      }
                    },
                  },
                  17: "GPSImgDirection",
                  18: "GPSMapDatum",
                  19: {
                    name: "GPSDestLatitudeRef",
                    description: function (e) {
                      switch (e.join("")) {
                        case "N":
                          return "North latitude";
                        case "S":
                          return "South latitude";
                        default:
                          return "Unknown";
                      }
                    },
                  },
                  20: {
                    name: "GPSDestLatitude",
                    description: function (e) {
                      return e[0] + e[1] / 60 + e[2] / 3600;
                    },
                  },
                  21: {
                    name: "GPSDestLongitudeRef",
                    description: function (e) {
                      switch (e.join("")) {
                        case "E":
                          return "East longitude";
                        case "W":
                          return "West longitude";
                        default:
                          return "Unknown";
                      }
                    },
                  },
                  22: {
                    name: "GPSDestLongitude",
                    description: function (e) {
                      return e[0] + e[1] / 60 + e[2] / 3600;
                    },
                  },
                  23: {
                    name: "GPSDestBearingRef",
                    description: function (e) {
                      switch (e.join("")) {
                        case "T":
                          return "True direction";
                        case "M":
                          return "Magnetic direction";
                        default:
                          return "Unknown";
                      }
                    },
                  },
                  24: "GPSDestBearing",
                  25: {
                    name: "GPSDestDistanceRef",
                    description: function (e) {
                      switch (e.join("")) {
                        case "K":
                          return "Kilometers";
                        case "M":
                          return "Miles";
                        case "N":
                          return "Knots";
                        default:
                          return "Unknown";
                      }
                    },
                  },
                  26: "GPSDestDistance",
                  27: {
                    name: "GPSProcessingMethod",
                    description: function (e) {
                      switch (
                        e
                          .slice(0, 8)
                          .map(function (e) {
                            return String.fromCharCode(e);
                          })
                          .join("")
                      ) {
                        case "ASCII\0\0\0":
                          return e
                            .slice(8, e.length)
                            .map(function (e) {
                              return String.fromCharCode(e);
                            })
                            .join("");
                        case "JIS\0\0\0\0\0":
                          return "[JIS encoded text]";
                        case "UNICODE\0":
                          return "[Unicode encoded text]";
                        case "\0\0\0\0\0\0\0\0":
                          return "[Undefined encoding]";
                      }
                    },
                  },
                  28: {
                    name: "GPSAreaInformation",
                    description: function (e) {
                      switch (
                        e
                          .slice(0, 8)
                          .map(function (e) {
                            return String.fromCharCode(e);
                          })
                          .join("")
                      ) {
                        case "ASCII\0\0\0":
                          return e
                            .slice(8, e.length)
                            .map(function (e) {
                              return String.fromCharCode(e);
                            })
                            .join("");
                        case "JIS\0\0\0\0\0":
                          return "[JIS encoded text]";
                        case "UNICODE\0":
                          return "[Unicode encoded text]";
                        case "\0\0\0\0\0\0\0\0":
                          return "[Undefined encoding]";
                      }
                    },
                  },
                  29: "GPSDateStamp",
                  30: {
                    name: "GPSDifferential",
                    description: function (e) {
                      switch (e) {
                        case 0:
                          return "Measurement without differential correction";
                        case 1:
                          return "Differential correction applied";
                        default:
                          return "Unknown";
                      }
                    },
                  },
                },
                interoperability: {
                  1: "InteroperabilityIndex",
                  2: "UnknownInteroperabilityTag0x0002",
                  4097: "UnknownInteroperabilityTag0x1001",
                  4098: "UnknownInteroperabilityTag0x1002",
                },
              }),
              (e.prototype.getTagValue = function (e) {
                if (this._tags[e] != null) return this._tags[e].value;
              }),
              (e.prototype.getTagDescription = function (e) {
                if (this._tags[e] != null) return this._tags[e].description;
              }),
              (e.prototype.getAllTags = function () {
                return this._tags;
              }),
              e
            );
          })();
      }).call(this);
    }
    var u = !1;
    function c() {
      return (u || ((u = !0), s()), l.exports);
    }
    var d = {},
      m = { exports: d };
    function p() {
      var e = c().ExifReader;
      m.exports = function (n) {
        var r = new e();
        r.load(n);
        var o = r.getAllTags(),
          a = {};
        for (var i in o) a[t(i)] = o[i].description;
        return a;
      };
      function t(e) {
        return e
          .replace(/([A-Z][a-z])|([a-z][A-Z])|([A-Z])/g, function (e) {
            return e.length == 1
              ? e.toLowerCase()
              : e[0] == e[0].toUpperCase()
                ? " " + e.toLowerCase()
                : e[0] + " " + e[1].toLowerCase();
          })
          .replace(/^\s+|\s+$/g, "");
      }
    }
    var _ = !1;
    function f() {
      return (_ || ((_ = !0), p()), m.exports);
    }
    function g(e) {
      switch (e) {
        case void 0:
          return f();
      }
    }
    a.exports = g;
  },
  null,
);
