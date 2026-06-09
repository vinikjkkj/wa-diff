__d(
  "WAWebWindowsHybridBridge.v2623",
  [
    "WAWebBuildConstants",
    "WAWebWindowsHybridAppActivationBridge.v2623",
    "WAWebWindowsHybridBridgeAbProps.v2623",
    "WAWebWindowsHybridBridgeAdv.v2623",
    "WAWebWindowsHybridBridgeBrowserExtensions.v2623",
    "WAWebWindowsHybridBridgeConnection.v2623",
    "WAWebWindowsHybridBridgeContacts.v2623",
    "WAWebWindowsHybridBridgeDebugFeatures.v2623",
    "WAWebWindowsHybridBridgeLinksPreview.v2623",
    "WAWebWindowsHybridBridgeMediaFiles.v2623",
    "WAWebWindowsHybridBridgeMediaTranscoder.v2623",
    "WAWebWindowsHybridBridgeNativeAppState.v2623",
    "WAWebWindowsHybridBridgePictures.v2623",
    "WAWebWindowsHybridBridgePreferences.v2623",
    "WAWebWindowsHybridBridgeRateTheApp.v2623",
    "WAWebWindowsHybridBridgeRingtone.v2623",
    "WAWebWindowsHybridBridgeScalingControl.v2623",
    "WAWebWindowsHybridBridgeSeamlessMigration.v2623",
    "WAWebWindowsHybridBridgeSharesheet.v2623",
    "WAWebWindowsHybridBridgeSystemIntegrations.v2623",
    "WAWebWindowsHybridBridgeTouchpadFix.v2623",
    "WAWebWindowsHybridBridgeVoip.v2623",
    "WAWebWindowsHybridBridgeWam.v2623",
    "cr:17220",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        var t;
        ((e.hostObjects.options.defaultSyncProxy = !0),
          (e.hostObjects.options.forceAsyncMethodMatches = [
            /Async$/,
            /AsyncWithSpeller$/,
          ]),
          (e.hostObjects.options.ignoreMemberNotFoundError = !0));
        var r = e.hostObjects.AbPropsBridge;
        r != null &&
          (this.abProps = new (o(
            "WAWebWindowsHybridBridgeAbProps.v2623",
          ).WindowsHybridBridgeAbProps_v2623)(r));
        var a = e.hostObjects.WamBridge;
        a != null &&
          (this.wam = new (o(
            "WAWebWindowsHybridBridgeWam.v2623",
          ).WindowsHybridBridgeWam_v2623)(a));
        var i = e.hostObjects.PreferencesBridge;
        i &&
          (this.$1 = new (o(
            "WAWebWindowsHybridBridgePreferences.v2623",
          ).WindowsHybridBridgePreferences_v2623)(i));
        var l = e.hostObjects.ScalingControlBridge;
        l &&
          (this.scalingControl = new (o(
            "WAWebWindowsHybridBridgeScalingControl.v2623",
          ).WindowsHybridBridgeScalingControl_v2623)(l));
        var s = e.hostObjects.PicturesBridge;
        s &&
          (this.pictures = new (o(
            "WAWebWindowsHybridBridgePictures.v2623",
          ).WindowsHybridBridgePictures_v2623)(s));
        var u = e.hostObjects.DebugFeaturesBridge,
          c = n("cr:17220") == null ? void 0 : n("cr:17220").debugFeaturesMock;
        u != null
          ? (this.$4 = new (o(
              "WAWebWindowsHybridBridgeDebugFeatures.v2623",
            ).WindowsHybridBridgeDebugFeatures_v2623)(u))
          : c != null;
        var d = e.hostObjects.VoipBridge,
          m = e.hostObjects.VoipSignalingBridge;
        (d &&
          m &&
          (this.voip = new (o(
            "WAWebWindowsHybridBridgeVoip.v2623",
          ).VoipWinRTBridge_v2623)(d, m)),
          (this.$5 = new (o(
            "WAWebWindowsHybridBridgeRateTheApp.v2623",
          ).WAWebWindowsHybridBridgeRateTheApp_v2623)(
            e.hostObjects.RateAppBridge,
          )),
          (this.$3 = new (o(
            "WAWebWindowsHybridBridgeConnection.v2623",
          ).WindowsHybridBridgeConnection_v2623)(
            e.hostObjects.ConnectionBridge,
          )),
          (this.$2 = e.hostObjects.ClientKeyBridge),
          (this.serverEncKeySaltBridge = e.hostObjects.ServerEncKeySaltBridge),
          (this.touchpadFix = new (o(
            "WAWebWindowsHybridBridgeTouchpadFix.v2623",
          ).WindowsHybridBridgeTouchpadFix_v2623)(e.hostObjects.TouchpadFix)),
          (this.linksPreview = new (o(
            "WAWebWindowsHybridBridgeLinksPreview.v2623",
          ).WindowsHybridBridgeLinksPreview_v2623)(
            e.hostObjects.LinksPreviewBridge,
          )));
        try {
          var p = e.hostObjects.sync.PopulatedContactsBridge,
            _ = e.hostObjects.PopulatedContactsBridge;
          _ != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2623",
            ).WindowsHybridBridgeContacts_v2623)(_, p, !0));
        } catch (t) {
          var f = e.hostObjects.ContactsBridge;
          f != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2623",
            ).WindowsHybridBridgeContacts_v2623)(
              f,
              e.hostObjects.sync.ContactsBridge,
              !1,
            ));
        }
        this.sqlite = e.hostObjects.SQLiteBridge;
        var g = e.hostObjects.MediaFilesBridge;
        g != null &&
          (this.mediaFiles = new (o(
            "WAWebWindowsHybridBridgeMediaFiles.v2623",
          ).WAWebWindowsHybridBridgeMediaFiles_v2623)(g));
        var h = e.hostObjects.SharesheetBridge;
        h != null &&
          (this.sharesheetBridge = new (o(
            "WAWebWindowsHybridBridgeSharesheet.v2623",
          ).WAWebWindowsHybridBridgeSharesheet_v2623)(h));
        var y = e.hostObjects.AppActivationBridge;
        y != null &&
          (this.appActivationBridge = new (o(
            "WAWebWindowsHybridAppActivationBridge.v2623",
          ).WindowsHybridAppActivationBridge_v2623)(y));
        var C = e.hostObjects.NativeAppStateBridge,
          b = e.hostObjects.sync.NativeAppStateBridge;
        C != null &&
          (this.nativeAppStateBridge = new (o(
            "WAWebWindowsHybridBridgeNativeAppState.v2623",
          ).WindowsHybridBridgeNativeAppState_v2623)(C, b));
        var v = e.hostObjects.SystemIntegrationsBridge;
        v &&
          (this.systemIntegrationsBridge = new (o(
            "WAWebWindowsHybridBridgeSystemIntegrations.v2623",
          ).WindowsHybridBridgeSystemIntegrations_v2623)(v));
        var S = e.hostObjects.BrowserExtensionsBridge;
        S &&
          (this.browserExtensionsBridge = new (o(
            "WAWebWindowsHybridBridgeBrowserExtensions.v2623",
          ).WindowsHybridBridgeBrowserExtensions_v2623)(S));
        var R = e.hostObjects.SeamlessMigrationBridge;
        R &&
          (this.seamlessMigrationBridge = new (o(
            "WAWebWindowsHybridBridgeSeamlessMigration.v2623",
          ).WindowsHybridBridgeSeamlessMigration_v2623)(R));
        var L = e.hostObjects.MediaTranscodingBridge;
        (L &&
          (this.mediaTranscodeBridge = new (o(
            "WAWebWindowsHybridBridgeMediaTranscoder.v2623",
          ).WindowsHybridBridgeMediaTranscoder_v2623)(e, L)),
          (this.adv = new (o(
            "WAWebWindowsHybridBridgeAdv.v2623",
          ).WindowsHybridBridgeAdv_v2623)(e.hostObjects.AdvBridge)));
        var E = e.hostObjects.RingtoneBridge;
        (E != null &&
          (this.ringtoneBridge = new (o(
            "WAWebWindowsHybridBridgeRingtone.v2623",
          ).WindowsHybridBridgeRingtone_v2623)(E)),
          (t = e.hostObjects.WebUpdateBridge) == null ||
            t.updateWebRevision(o("WAWebBuildConstants").VERSION_TERTIARY));
      }
      var t = e.prototype;
      return (
        (t.getPreferences = function () {
          var e;
          return ((e = this.$1) == null || e.initialize(), this.$1);
        }),
        (t.getScalingControl = function () {
          var e;
          return (
            (e = this.scalingControl) == null || e.initialize(),
            this.scalingControl
          );
        }),
        (t.getRateTheApp = function () {
          return this.$5;
        }),
        (t.getClientKeyBridge = function () {
          return this.$2;
        }),
        (t.getDebugFeatures = function () {
          return this.$4;
        }),
        e
      );
    })();
    l.WindowsHybridBridge_v2623 = e;
  },
  98,
);
