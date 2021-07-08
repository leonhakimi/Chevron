<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateReportsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reports', function (Blueprint $table) {
            $table->timestamps('date');
            $table->id();
            $table->timestamps();
            $table->decimal('fuel_sales');
            $table->decimal('nf_sales');
            $table->decimal('lotto');
            $table->decimal('ar');
            $table->decimal('discount');
            $table->decimal('credit');
            $table->decimal('debit');
            $table->decimal('cash');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('reports');
    }
}
