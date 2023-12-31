<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DocumentStatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('document_statuses')->insert([
            ['name'=>'Verified'],
            ['name'=>'Rejected'],
            ['name'=>'Pending Approval'],
            ['name'=>'Pending Submission'],
            ['name'=>'Missing']
        ]
        );
    }
}
