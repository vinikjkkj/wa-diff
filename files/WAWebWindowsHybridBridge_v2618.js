__d(
  "WAWebWindowsHybridBridge.v2618",
  [
    "WAWebBuildConstants",
    "WAWebWindowsHybridAppActivationBridge.v2618",
    "WAWebWindowsHybridBridgeAbProps.v2618",
    "WAWebWindowsHybridBridgeAdv.v2618",
    "WAWebWindowsHybridBridgeBrowserExtensions.v2618",
    "WAWebWindowsHybridBridgeConnection.v2618",
    "WAWebWindowsHybridBridgeContacts.v2618",
    "WAWebWindowsHybridBridgeDebugFeatures.v2618",
    "WAWebWindowsHybridBridgeLinksPreview.v2618",
    "WAWebWindowsHybridBridgeMediaFiles.v2618",
    "WAWebWindowsHybridBridgeMediaTranscoder.v2618",
    "WAWebWindowsHybridBridgeNativeAppState.v2618",
    "WAWebWindowsHybridBridgePictures.v2618",
    "WAWebWindowsHybridBridgePreferences.v2618",
    "WAWebWindowsHybridBridgeRateTheApp.v2618",
    "WAWebWindowsHybridBridgeRingtone.v2618",
    "WAWebWindowsHybridBridgeScalingControl.v2618",
    "WAWebWindowsHybridBridgeSeamlessMigration.v2618",
    "WAWebWindowsHybridBridgeSharesheet.v2618",
    "WAWebWindowsHybridBridgeSystemIntegrations.v2618",
    "WAWebWindowsHybridBridgeTouchpadFix.v2618",
    "WAWebWindowsHybridBridgeVoip.v2618",
    "WAWebWindowsHybridBridgeWam.v2618",
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
            "WAWebWindowsHybridBridgeAbProps.v2618",
          ).WindowsHybridBridgeAbProps_v2618)(r));
        var a = e.hostObjects.WamBridge;
        a != null &&
          (this.wam = new (o(
            "WAWebWindowsHybridBridgeWam.v2618",
          ).WindowsHybridBridgeWam_v2618)(a));
        var i = e.hostObjects.PreferencesBridge;
        i &&
          (this.$1 = new (o(
            "WAWebWindowsHybridBridgePreferences.v2618",
          ).WindowsHybridBridgePreferences_v2618)(i));
        var l = e.hostObjects.ScalingControlBridge;
        l &&
          (this.scalingControl = new (o(
            "WAWebWindowsHybridBridgeScalingControl.v2618",
          ).WindowsHybridBridgeScalingControl_v2618)(l));
        var s = e.hostObjects.PicturesBridge;
        s &&
          (this.pictures = new (o(
            "WAWebWindowsHybridBridgePictures.v2618",
          ).WindowsHybridBridgePictures_v2618)(s));
        var u = e.hostObjects.DebugFeaturesBridge,
          c = n("cr:17220") == null ? void 0 : n("cr:17220").debugFeaturesMock;
        u != null
          ? (this.$4 = new (o(
              "WAWebWindowsHybridBridgeDebugFeatures.v2618",
            ).WindowsHybridBridgeDebugFeatures_v2618)(u))
          : c != null;
        var d = e.hostObjects.VoipBridge,
          m = e.hostObjects.VoipSignalingBridge;
        (d &&
          m &&
          (this.voip = new (o(
            "WAWebWindowsHybridBridgeVoip.v2618",
          ).VoipWinRTBridge_v2618)(d, m)),
          (this.$5 = new (o(
            "WAWebWindowsHybridBridgeRateTheApp.v2618",
          ).WAWebWindowsHybridBridgeRateTheApp_v2618)(
            e.hostObjects.RateAppBridge,
          )),
          (this.$3 = new (o(
            "WAWebWindowsHybridBridgeConnection.v2618",
          ).WindowsHybridBridgeConnection_v2618)(
            e.hostObjects.ConnectionBridge,
          )),
          (this.$2 = e.hostObjects.ClientKeyBridge),
          (this.serverEncKeySaltBridge = e.hostObjects.ServerEncKeySaltBridge),
          (this.touchpadFix = new (o(
            "WAWebWindowsHybridBridgeTouchpadFix.v2618",
          ).WindowsHybridBridgeTouchpadFix_v2618)(e.hostObjects.TouchpadFix)),
          (this.linksPreview = new (o(
            "WAWebWindowsHybridBridgeLinksPreview.v2618",
          ).WindowsHybridBridgeLinksPreview_v2618)(
            e.hostObjects.LinksPreviewBridge,
          )));
        try {
          var p = e.hostObjects.sync.PopulatedContactsBridge,
            _ = e.hostObjects.PopulatedContactsBridge;
          _ != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2618",
            ).WindowsHybridBridgeContacts_v2618)(_, p, !0));
        } catch (t) {
          var f = e.hostObjects.ContactsBridge;
          f != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2618",
            ).WindowsHybridBridgeContacts_v2618)(
              f,
              e.hostObjects.sync.ContactsBridge,
              !1,
            ));
        }
        this.sqlite = e.hostObjects.SQLiteBridge;
        var g = e.hostObjects.MediaFilesBridge;
        g != null &&
          (this.mediaFiles = new (o(
            "WAWebWindowsHybridBridgeMediaFiles.v2618",
          ).WAWebWindowsHybridBridgeMediaFiles_v2618)(g));
        var h = e.hostObjects.SharesheetBridge;
        h != null &&
          (this.sharesheetBridge = new (o(
            "WAWebWindowsHybridBridgeSharesheet.v2618",
          ).WAWebWindowsHybridBridgeSharesheet_v2618)(h));
        var y = e.hostObjects.AppActivationBridge;
        y != null &&
          (this.appActivationBridge = new (o(
            "WAWebWindowsHybridAppActivationBridge.v2618",
          ).WindowsHybridAppActivationBridge_v2618)(y));
        var C = e.hostObjects.NativeAppStateBridge,
          b = e.hostObjects.sync.NativeAppStateBridge;
        C != null &&
          (this.nativeAppStateBridge = new (o(
            "WAWebWindowsHybridBridgeNativeAppState.v2618",
          ).WindowsHybridBridgeNativeAppState_v2618)(C, b));
        var v = e.hostObjects.SystemIntegrationsBridge;
        v &&
          (this.systemIntegrationsBridge = new (o(
            "WAWebWindowsHybridBridgeSystemIntegrations.v2618",
          ).WindowsHybridBridgeSystemIntegrations_v2618)(v));
        var S = e.hostObjects.BrowserExtensionsBridge;
        S &&
          (this.browserExtensionsBridge = new (o(
            "WAWebWindowsHybridBridgeBrowserExtensions.v2618",
          ).WindowsHybridBridgeBrowserExtensions_v2618)(S));
        var R = e.hostObjects.SeamlessMigrationBridge;
        R &&
          (this.seamlessMigrationBridge = new (o(
            "WAWebWindowsHybridBridgeSeamlessMigration.v2618",
          ).WindowsHybridBridgeSeamlessMigration_v2618)(R));
        var L = e.hostObjects.MediaTranscodingBridge;
        (L &&
          (this.mediaTranscodeBridge = new (o(
            "WAWebWindowsHybridBridgeMediaTranscoder.v2618",
          ).WindowsHybridBridgeMediaTranscoder_v2618)(e, L)),
          (this.adv = new (o(
            "WAWebWindowsHybridBridgeAdv.v2618",
          ).WindowsHybridBridgeAdv_v2618)(e.hostObjects.AdvBridge)));
        var E = e.hostObjects.RingtoneBridge;
        (E != null &&
          (this.ringtoneBridge = new (o(
            "WAWebWindowsHybridBridgeRingtone.v2618",
          ).WindowsHybridBridgeRingtone_v2618)(E)),
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
    l.WindowsHybridBridge_v2618 = e;
  },
  98,
);
