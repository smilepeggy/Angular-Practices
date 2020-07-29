import { Component, OnInit } from "@angular/core";

import { ServersService } from "../servers.service";
import { ActivatedRoute, Params, Router, Data } from "@angular/router";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styleUrls: ["./server.component.css"],
})
export class ServerComponent implements OnInit {
  server: { id: number; name: string; status: string };

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // method 1
    // const id = +this.route.snapshot.params["id"];
    // this.server = this.serversService.getServer(id);

    // method 2
    // this.route.params.subscribe((params: Params) => {
    //   this.server = this.serversService.getServer(+params["id"]);
    // });

    //method3
    this.route.data.subscribe((data: Data) => {
      this.server = data['server']; // 'server' should be the same as in appRoutingModule
    });
  }

  onEdit() {
    //method 1
    // this.router.navigate(["/servers", this.server.id, "edit"]);

    // method 2
    this.router.navigate(["edit"], {
      relativeTo: this.route,
      queryParamsHandling: "preserve",
    });
  }
}
