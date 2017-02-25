"use strict";
var core_1 = require("@angular/core");
var element_registry_1 = require("nativescript-angular/element-registry");
var nativescript_google_maps_sdk_1 = require("nativescript-google-maps-sdk");
var friends_lives_service_1 = require("../../shared/friends/friends-lives.service");
var friends_service_1 = require("../../shared/friends/friends.service");
var map_view_service_1 = require("../../shared/services/map/map-view.service");
element_registry_1.registerElement('MapView', function () { return nativescript_google_maps_sdk_1.MapView; });
var FriendsMapComponent = (function () {
    function FriendsMapComponent(friendsLiveService, mapViewService) {
        this.friendsLiveService = friendsLiveService;
        this.mapViewService = mapViewService;
        this.friends = new Array();
    }
    FriendsMapComponent.prototype.onMapReady = function (event) {
        if (!event.object)
            return;
        this.mapViewService.onMapReady(event);
    };
    FriendsMapComponent.prototype.ngOnInit = function () {
    };
    return FriendsMapComponent;
}());
FriendsMapComponent = __decorate([
    core_1.Component({
        selector: "friends-map",
        templateUrl: "widgets/friends-map/friends-map.html",
        styleUrls: ["widgets/friends-map/friends-map-common.css", "widgets/friends-map/friends-map.css"],
        providers: [friends_lives_service_1.FriendsLiveService, friends_service_1.FriendsService, map_view_service_1.MapViewService]
    }),
    __metadata("design:paramtypes", [friends_lives_service_1.FriendsLiveService,
        map_view_service_1.MapViewService])
], FriendsMapComponent);
exports.FriendsMapComponent = FriendsMapComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJpZW5kcy1tYXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZnJpZW5kcy1tYXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBNEU7QUFDNUUsMEVBQXdFO0FBQ3hFLDZFQUFtRjtBQUduRixvRkFBZ0Y7QUFDaEYsd0VBQXNFO0FBR3RFLCtFQUE0RTtBQUU1RSxrQ0FBZSxDQUFDLFNBQVMsRUFBRSxjQUFNLE9BQUEsc0NBQU8sRUFBUCxDQUFPLENBQUMsQ0FBQztBQVExQyxJQUFhLG1CQUFtQjtJQUs5Qiw2QkFBb0Isa0JBQXNDLEVBQ2hELGNBQThCO1FBRHBCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDaEQsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQ3RDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxLQUFLLEVBQWtCLENBQUM7SUFDN0MsQ0FBQztJQUVELHdDQUFVLEdBQVYsVUFBVyxLQUFLO1FBQ2QsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1lBQUMsTUFBTSxDQUFDO1FBQzFCLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRXhDLENBQUM7SUFDRCxzQ0FBUSxHQUFSO0lBR0EsQ0FBQztJQWNILDBCQUFDO0FBQUQsQ0FBQyxBQWhDRCxJQWdDQztBQWhDWSxtQkFBbUI7SUFOL0IsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxhQUFhO1FBQ3ZCLFdBQVcsRUFBRSxzQ0FBc0M7UUFDbkQsU0FBUyxFQUFFLENBQUMsNENBQTRDLEVBQUUscUNBQXFDLENBQUM7UUFDaEcsU0FBUyxFQUFFLENBQUMsMENBQWtCLEVBQUUsZ0NBQWMsRUFBRSxpQ0FBYyxDQUFDO0tBQ2hFLENBQUM7cUNBTXdDLDBDQUFrQjtRQUNoQyxpQ0FBYztHQU43QixtQkFBbUIsQ0FnQy9CO0FBaENZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnknO1xuaW1wb3J0IHsgTWFwVmlldywgTWFya2VyLCBQb2x5bGluZSwgUG9zaXRpb24gfSBmcm9tICduYXRpdmVzY3JpcHQtZ29vZ2xlLW1hcHMtc2RrJztcbmltcG9ydCBzaWRlRHJhd2VyTW9kdWxlID0gcmVxdWlyZSgnbmF0aXZlc2NyaXB0LXRlbGVyaWstdWkvc2lkZWRyYXdlcicpO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCwgU2lkZURyYXdlclR5cGUgfSBmcm9tICduYXRpdmVzY3JpcHQtdGVsZXJpay11aS9zaWRlZHJhd2VyL2FuZ3VsYXInO1xuaW1wb3J0IHsgRnJpZW5kc0xpdmVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2ZyaWVuZHMvZnJpZW5kcy1saXZlcy5zZXJ2aWNlJztcbmltcG9ydCB7IEZyaWVuZHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2ZyaWVuZHMvZnJpZW5kcy5zZXJ2aWNlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICcuLi8uLi8uLi9wbGF0Zm9ybXMvaW9zL2J1aWxkL2VtdWxhdG9yL0hlbGxvV29ybGQuYXBwL2FwcC90bnNfbW9kdWxlcy9yeGpzL3NyYy9PYnNlcnZhYmxlJztcbmltcG9ydCB7IEZyaWVuZFBvc2l0aW9uIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2ZyaWVuZHMvZnJpZW5kJztcbmltcG9ydCB7IE1hcFZpZXdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzL21hcC9tYXAtdmlldy5zZXJ2aWNlJztcblxucmVnaXN0ZXJFbGVtZW50KCdNYXBWaWV3JywgKCkgPT4gTWFwVmlldyk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJmcmllbmRzLW1hcFwiLFxuICB0ZW1wbGF0ZVVybDogXCJ3aWRnZXRzL2ZyaWVuZHMtbWFwL2ZyaWVuZHMtbWFwLmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCJ3aWRnZXRzL2ZyaWVuZHMtbWFwL2ZyaWVuZHMtbWFwLWNvbW1vbi5jc3NcIiwgXCJ3aWRnZXRzL2ZyaWVuZHMtbWFwL2ZyaWVuZHMtbWFwLmNzc1wiXSxcbiAgcHJvdmlkZXJzOiBbRnJpZW5kc0xpdmVTZXJ2aWNlLCBGcmllbmRzU2VydmljZSwgTWFwVmlld1NlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIEZyaWVuZHNNYXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAvLyNBbWlnb3NcbiAgcHVibGljIGZyaWVuZHM6IEFycmF5PEZyaWVuZFBvc2l0aW9uPjtcblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZnJpZW5kc0xpdmVTZXJ2aWNlOiBGcmllbmRzTGl2ZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBtYXBWaWV3U2VydmljZTogTWFwVmlld1NlcnZpY2UpIHtcbiAgICB0aGlzLmZyaWVuZHMgPSBuZXcgQXJyYXk8RnJpZW5kUG9zaXRpb24+KCk7XG4gIH1cblxuICBvbk1hcFJlYWR5KGV2ZW50KSB7XG4gICAgaWYgKCFldmVudC5vYmplY3QpIHJldHVybjtcbiAgICB0aGlzLm1hcFZpZXdTZXJ2aWNlLm9uTWFwUmVhZHkoZXZlbnQpO1xuXG4gIH1cbiAgbmdPbkluaXQoKSB7XG5cblxuICB9XG5cbiAgLy8gQFZpZXdDaGlsZChSYWRTaWRlRHJhd2VyQ29tcG9uZW50KSBwdWJsaWMgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xuICAvLyBwcml2YXRlIGRyYXdlcjogU2lkZURyYXdlclR5cGU7XG5cblxuICAvLyBvcGVuRHJhd2VyKCkge1xuICAvLyAgIHRoaXMuZHJhd2VyLnNob3dEcmF3ZXIoKTtcbiAgLy8gfVxuXG4gIC8vIGNsb3NlRHJhd2VyKCkge1xuICAvLyAgIHRoaXMuZHJhd2VyLmNsb3NlRHJhd2VyKCk7XG4gIC8vIH1cblxufVxuXG4iXX0=