import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { ApiService } from './api.service';


describe('ApiService', () => {

      beforeEach(() => TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [ApiService]
      }));

       it('should be created', () => {
        const service: ApiService = TestBed.get(ApiService);
        expect(service).toBeTruthy();
       });

       it('should have getData function', () => {
        const service: ApiService = TestBed.get(ApiService);
        expect(service.getlogins).toBeTruthy();
       });

       it('should have PostData function', ()=>{
        const service: ApiService = TestBed.get(ApiService);
        expect(service.postlogins).toBeTruthy();
       })

       it('should have Update Data function', ()=>{
        const service: ApiService = TestBed.get(ApiService);
        expect(service.editlogins).toBeTruthy();
       })

       it('should have Delete Data function', ()=>{
        const service: ApiService = TestBed.get(ApiService);
        expect(service.deletelogins).toBeTruthy();
       })
    });
